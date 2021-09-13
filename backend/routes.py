from backend import app
from backend import db
from
from backend.models import Employee


@app.route('/register', methods=['GET', 'POST'])
def add_employee():
    form = request_from()
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

