from backend import db


class Employee(db.Model):
    employee_id = db.Column(db.Integer(), primary_key=True, unique=True)
    first_name = db.Column(db.String(length=30), nullable=False)
    last_name = db.Column(db.String(length=30), nullable=False)
    sex = db.Column(db.String(length=30), nullable=False)
    profession = db.Column(db.String(length=30), nullable=False)
    department = db.Column(db.String(length=30), nullable=False)
    email = db.Column(db.String(length=50), nullable=False, unique=True)

