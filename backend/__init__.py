from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SECRET_KEY'] = 'asd1234zxcv34567sdfgh'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///facebase.db'

db = SQLAlchemy(app)
