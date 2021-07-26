import sqlite3

#Connecting to sqlite
conn = sqlite3.connect('FaceBase.db')

#Creating a cursor object using the cursor() method
cursor = conn.cursor()

#Doping EMPLOYEE table if already exists.
cursor.execute("DROP TABLE IF EXISTS EMPLOYEE")

#Creating table as per requirement
sql ='''CREATE TABLE EMPLOYEE(
   EMPLOYEE_ID INT PRIMARY KEY,
   FIRST_NAME CHAR(20) NOT NULL,
   LAST_NAME CHAR(20),
   DEPARTMENT CHAR(20),
   JOB TITLE CHAR(25),
   AGE INT,
   SEX CHAR(1),
   INCOME FLOAT
)'''
cursor.execute(sql)
print("Table created successfully........")

# Commit your changes in the database
conn.commit()

#Closing the connection
conn.close()