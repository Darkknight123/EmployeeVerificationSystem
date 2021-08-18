# importing all the modules
import psycopg2
import requests_file
from flask import Flask
import cv2
import numpy as np
import os
from flask import *
import face_recognition
from flask_cors import CORS, cross_origin
import mysql.connector as conn

app = Flask(__name__)
CORS(app, support_credentials=True)
db = []
known_path = os.path.join(os.getcwd(), "ImageAttendance/Known_faces/")
unknown_path = os.path.join(os.getcwd(), "ImageAttendance/Unknown_faces/")

DATABASE_USER = os.environ['Dark_Knight']
DATABASE_PASSWORD = os.environ['Maggie']
DATABASE_NAME = os.environ['FaceBase']
DATABASE_HOST = os.environ['127.0.0.1']
DATABASE_PORT = os.environ['3000']


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
    cursor = con.cursor()
    sql = 'select * from EMPLOYEE'
    cursor.execute(sql)
    result = cursor.fetchall()
    for i in result:
        l = [i[0]]
        string = i[1][1:-2]
        nums = []
        for x in string.split():
            nums.append(float(x.strip()))
        l.append(nums)
        db.append(1)
    cursor.close()
    con.close()


# * --------------------  ROUTES ------------------- *
# * ------- get data from the face recognition ------ *
@app.route('/register', methods=['POST'])
@cross_origin(supports_credentials=True)
def add_employee(request_form=None):
    try:
        # get the picture from the request
        image_file = requests_file['image']
        print(request.form['EmployeeID'])

        # storing the image in the folder of known faces
        file_path = os.path.join(f"ImageAttendance/Known_faces/-{request_form['EmployeeID']}.jpg")
        image_file.save(file_path)
        answer = 'new employee successfully added'
    except:
        answer = 'Error while adding new employee. Please try later....'
    return jsonify(answer)


@app.route("/Login")
def login():
    get_data()
    global db
    if db == []:
        msg = "ACCESS DENIED \n YOU DO NOT HAVE THE PRIVILEGES TO ACCESS THIS ROOM"
    else:
        known_face_encodings = [i[1] for i in db]
        known_face_names = [i[0] for i in db]
        face_locations = []
        face_encodings = []
        face_names = []
        video_capture = cv2.VideoCapture(0)
        ret, frame = video_capture.read()
        small_frame = cv2.resize(frame, (0, 0), fx=0.25, fy=0.25)
        rgb_small_frame = small_frame[:, :, ::-1]
        face_locations = face_recognition.face_locations(rgb_small_frame)
        face_encodings = face_recognition.face_encodings(rgb_small_frame, face_locations)
        face_names = []
        if face_encodings == []:
            msg = "ACCESS DENIED \n YOU DO NOT HAVE THE PRIVILEGES TO ACCESS THIS ROOM"
        else:
            for face_encoding in face_encodings:
                matches = face_recognition.compare_faces(known_face_encodings, face_encoding)
                name = "Unknown"
                face_distances = face_recognition.face_distance(known_face_encodings, face_encoding)
                best_match_index = np.argmin(face_distances)
                if matches[best_match_index]:
                    name = known_face_names[best_match_index]
                if name == "Unkown":
                    msg = "ACCESS DENIED \n YOU DO NOT HAVE THE PRIVILEGES TO ACCESS THIS ROOM"
                else:
                    msg = name
                face_names.append(name)
            for (top, right, bottom, left), name in zip(face_locations, face_names):
                top *= 4
                right *= 4
                bottom *= 4
                left *= 4
                cv2.rectangle(frame, (left, top), (right, bottom), (0, 0, 255), cv2.FILLED)
                font = cv2.FONT_HERSHEY_DUPLEX
                cv2.putText(frame, name, (left + 6, bottom - 6), font, 1.0, (255, 255, 255), 1)
            os.chdir(unknown_path)
            rand_no = np.random.random_sample()
            cv2.imwrite(str(rand_no) + ".jpg", frame)
        return msg
    if __name__ == '__main__':
        app.run()
