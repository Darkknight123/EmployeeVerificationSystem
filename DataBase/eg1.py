import sqlite3

#Connecting to sqlite
conn = sqlite3.connect('FaceBase.db')

#Creating a cursor object using the cursor() method
cursor = conn.cursor()

#Doping EMPLOYEE table if already exists.
cursor.execute("DROP TABLE IF EXISTS EMPLOYEE")

#Creating table as per requirement
sql ='''CREATE TABLE employees(
   EMPLOYEE_ID INT PRIMARY KEY,
   FIRST_NAME CHAR(20) NOT NULL,
   SECOND_NAME CHAR(20),
   DEPARTMENT CHAR(20),
   PROFFESION CHAR(25),
   EMAIL INT,
   SEX CHAR(1),
   PICTURE BLOB,
   TIME DATETIME (30),
   DATE DATETIME(40)
)'''
cursor.execute(sql)
print("Table created successfully........")

# Commit your changes in the database
conn.commit()

#Closing the connection
conn.close()