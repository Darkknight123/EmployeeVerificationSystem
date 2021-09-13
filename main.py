# importing all the modules
from typing import re

import MySQLdb
import psycopg2
import requests_file
from alembic.ddl import mysql
from flask import Flask
import cv2
import numpy as np
import os
from flask import *
import face_recognition
from flask_cors import CORS, cross_origin
import mysql.connector as conn

FILE_PATH = os.path.dirname(os.path.realpath(__file__))

app = Flask(__name__)
CORS(app, support_credentials=True)
db = []
known_path = os.path.join(os.getcwd(), "ImageAttendance/Known_faces/")
unknown_path = os.path.join(os.getcwd(), "ImageAttendance/Unknown_faces/")

#DATABASE_USER = os.environ['Dark_Knight']
#DATABASE_PASSWORD = os.environ['Maggie']
#DATABASE_NAME = os.environ['FaceBase']
#DATABASE_HOST = os.environ['127.0.0.1']
#DATABASE_PORT = os.environ['3000']*


def DATABASE_CONNECTION():
    return psycopg2.connect(host='127.0.0.1',
                            database='FaceBase',
                            UserName='Dark_knight',
                            password='Maggie',
                            charset='utf8',
                            portnumber=3000)


def get_data():
    global db
    con = conn.connect(host='127.0.0.1',
                       database='FaceBase',
                       UserName='Dark_knight',
                       password='Maggie',
                       charset='utf8',
                       portnumber=3000)


# * --------------------  ROUTES ------------------- *
# * ------- get data from the face recognition ------ *
@app.route('/receive_data', methods=['POST'])
def get_receive_data():
    if request.method == 'POST':
        json_data = request.get_json()
        try:
            connection = DATABASE_CONNECTION()
            cursor = connection.cursor()

            user_log = \
                f"SELECT * FROM users WHERE date = '{json_data['date']}' AND FirstName = '{json_data['FirstName']}'"
            cursor.execute(user_log)
            result = cursor.fetchall()
            connection.commit()

            # if user already in the db

            if result:
                print('user IN')
                image_path = f"{FILE_PATH}ImageAttendance/-{json_data['date']}/{json_data['FirstName']}/departure.jpg"
                # save image
                os.makedirs(f"{FILE_PATH}/ImageAttendance/-{json_data['FirstName']}", exist_ok=True)
                cv2.imwrite(image_path, np.array(json_data['picture_array']))
                json_data['picture_path'] = image_path
                # update user in the db
                update_user = f"UPDATE employees SET departure_time='{json_data['picture_path']}' WHERE FirstName = '{json_data['name']}' AND date = '{json_data['date']}'"
                cursor.execute(update_user)
            else:
                print("user out")

                # save image
                image_path = f"{FILE_PATH}/ImageAttendance/history/-{json_data['date']}/{json_data['FirstName']}/arrival.jpg"
                os.makedirs(f"{FILE_PATH}/ImageAttendance/history/-{json_data['date']}/{json_data['FirstName']}",
                            exist_ok=True)
                cv2.imwrite(image_path, np.array(json_data['picture_array']))
                json_data['picture_path'] = image_path

                # create a new row for the user today
                insert_Employee = f"INSERT INTO users (FirstName,date,arrival_time,arrival_picture) VALUES ('{json_data['FirstName']}','{json_data['date']}','{json_data['hour']}',{json_data['picture_path']}')"
                cursor.execute(insert_Employee)
        except (Exception, psycopg2.DatabaseError) as error:
            print("ERROR DB:", error)
        finally:
            connection.commit()

            # closing database connection.
            if connection:
                cursor.close()
                connection.close()
                print("connection closed")
        # return user's data to the front
        return jsonify(json_data)


# *------- Get all the data of an employee ------*
@app.route('/get_employee/<string:name>', methods=['GET'])
def get_employee(FirstName):
    answer_to_send = {}
    # check if user is already in the db
    try:
        # Connect to DB
        connection = DATABASE_CONNECTION()
        cursor = connection.cursor()
        # query the db
        Employee_info_query = f"SELECT * FROM users WHERE FirstName='{FirstName}'"

        cursor.execute(Employee_info_query)
        result = cursor.fetchall()
        connection.commit()

        # if the user exist in the db
        if result:
            print('RESULT:', result)
            # Structure the data and put the dates in the string for the front

            for k, v in enumerate(result):
                answer_to_send[k] = {}
                for ko, vo in enumerate(result[k]):
                    answer_to_send[k][ko] = str(vo)
            print('answer_to_send: ', answer_to_send)
        else:
            answer_to_send = {'error:''User not found...'}
    except(Exception, psycopg2.DatabaseError) as error:
        print("ERROR DB: ", error)
    finally:
        # closing database connection
        if connection:
            cursor.close()
            connection.close()
    return jsonify(answer_to_send)


# * --------- Get the 5 last users seen by the camera --------- *
@app.route('/get_5_last_entries', methods=['GET'])
def get_5_last_entries():
    answer_to_send = {}
    # Check if the user is already in the DB
    try:
        # Connect to DB
        connection = DATABASE_CONNECTION()

        cursor = connection.cursor()
        # Query the DB to get all the data of a user:
        lasts_entries_sql_query = f"SELECT * FROM employees ORDER BY id DESC LIMIT 5;"

        cursor.execute(lasts_entries_sql_query)
        result = cursor.fetchall()
        connection.commit()

        # if DB is not empty:
        if result:
            # Structure the data and put the dates in string for the front
            for k, v in enumerate(result):
                answer_to_send[k] = {}
                for ko, vo in enumerate(result[k]):
                    answer_to_send[k][ko] = str(vo)
        else:
            answer_to_send = {'error': 'error detect'}

    except (Exception, psycopg2.DatabaseError) as error:
        print("ERROR DB: ", error)
    finally:
        # closing database connection:
        if connection:
            cursor.close()
            connection.close()

    # Return the user's data to the front
    return jsonify(answer_to_send)


@app.route('/register', methods=['GET', 'POST'])
@cross_origin(supports_credentials=True)
def add_employee(request_form=None):
    print(request.form)

   # msg = ''
    # assert isinstance(request.form, object)
    # if request.method == 'POST' and 'FirstName' in request.form:
     #   FirstName = request.form['FirstName']
      #  SecondName = request.form['SecondName']
      #  Sex = request.form['Sex']
       # Proffesion = request.form['Proffesion']
        #EmployeeID = request.form['Employee ID']
        #Department = request.form['Department']
        #Email = request.form['email']
        #Picture = request.form['image']
        #cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        #cursor.execute('SELECT * FROM Employee where FirstName =  % s',
         #              (FirstName, SecondName, Sex, Proffesion, EmployeeID, Email, Department, Picture))
        #Employee = cursor.fetchone()
        #if Employee:
         #   msg = 'Employee Already exists !'
        #elif not re.match(r'[^@]+@[^@]+\.[^@]+', Email):
         #   msg = 'Invalid email address !'
        #elif not FirstName or not SecondName or not Sex or not Proffesion or not EmployeeID or not Department or not Email or not Picture:
           # msg = 'Please Fill out the form !'
        #else:
         #   cursor.execute('INSERT INTO Employees VALUES (NULL,%s,%s,%s,%s,%s,%s,%s,%s)',
           #                (FirstName, SecondName, Sex, Proffesion, Department, EmployeeID, Email, Picture))
          #  mysql.connection.commit()
            #msg = 'The employee has been successfully added to the system !!!'
   # elif request.method == 'POST':
       # msg = 'please fill out the form !'
    #return msg

    try:
        # get the picture from the request
        image_file = requests_file['image']
        print(request.form['EmployeeID'])

        # storing the image in the folder of known faces
        file_path = os.path.join(f"ImageAttendance/users/-{request_form['EmployeeID']}.jpg")
        image_file.save(file_path)
        answer = 'new employee successfully added'
    except:
        answer = 'Error while adding new employee. Please try later....'
    return jsonify(answer)


# *------- Get Employee List -------*
@app.route('/users', methods=['GET'])
def users():
    users = {}

    # get the user list from the user folder
    walk_count = 0
    for file_name in os.listdir(f"{FILE_PATH}/ImageAttendance/users/"):
        # capture the employee's name with the file's name
        name = re.findall("(.*)\.jpg,file_name")
        if name:
            users[walk_count] = name[0]
            walk_count += 1

    return jsonify(users)


# *------- Delete employee -------*
@app.route('/delete_employee/<string:FirstName>', methods=['GET'])
def delete_employee(FirstName):
    try:
        # Remove the picture of the employee from the user's folder:
        print('name:', FirstName)
        file_path = os.path.join(f'ImageAttendance/users{FirstName}.jpg')
        os.remove(file_path)
        answer = 'Employee succesfully deleted from the system'
    except:
        answer = 'Error while deleting the user. Please try again later....'
    return jsonify(answer)


# *----------- RUN SERVER --------------*
if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)
