# from flask import Flask, render_template, url_for, redirect, jsonify, request
# from flask_sqlalchemy import SQLAlchemy
# from flask_login import UserMixin, LoginManager, login_user, login_required, logout_user, current_user
# from flask_wtf import FlaskForm
# from wtforms import StringField, PasswordField, SubmitField
# from wtforms.validators import InputRequired, Length, ValidationError
# from flask_bcrypt import Bcrypt
# from sqlalchemy import Text,Column, Integer
# from flask import Flask, jsonify



# app = Flask(__name__)
# bcrypt = Bcrypt(app)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///new_database.db'
# app.config['SECRET_KEY'] = 'thisisasecretkey'
# db = SQLAlchemy(app)
# login_manager = LoginManager(app)

# class User(UserMixin, db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     email = db.Column(db.String(20), unique=True, nullable=False)
#     password = db.Column(db.String(80), nullable=False)
#     # response = Column(Text, nullable=False)
# @login_manager.user_loader
# def load_user(user_id):
#     return User.query.get(int(user_id))

# with app.app_context():
#     db.create_all()

# class RegisterForm(FlaskForm):
#     email = StringField('Email', validators=[InputRequired(), Length(min=4, max=30)])
#     password = PasswordField('Password', validators=[InputRequired(), Length(min=4, max=20)])
#     submit = SubmitField('Register')

# @app.route('/register', methods=['POST'])
# def register():
#     data = request.json
#     email = data.get('email')
#     password = data.get('password')

#     if not email or not password:
#         return jsonify({'message': 'Email and password are required'}), 400

#     existing_user = User.query.filter_by(email=email).first()
#     if existing_user:
#         return jsonify({'message': 'User already exists'}), 409

#     hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

#     new_user = User(email=email, password=hashed_password)
#     db.session.add(new_user)
#     db.session.commit()

#     return jsonify({'message': 'User registered successfully'}), 201

# @app.route('/login', methods=['POST'])
# def api_login():
#     data = request.json
#     if not data or 'email' not in data or 'password' not in data:
#         return jsonify({'message': 'Invalid request'}), 400
    
#     email = data['email']
#     password = data['password']
    
#     user = User.query.filter_by(email=email).first()
#     if not user or not bcrypt.check_password_hash(user.password, password):
#         return jsonify({'message': 'Invalid credentials'}), 401
    
#     login_user(user)
#     return jsonify({'message': 'Login successful'})


# if __name__ == '__main__':
#     app.run(debug=True)

from flask import Flask, render_template, url_for, redirect, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin, LoginManager, login_user, login_required, logout_user, current_user
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import InputRequired, Length, ValidationError
from flask_bcrypt import Bcrypt
from sqlalchemy import Column, Integer, String

app = Flask(__name__)
bcrypt = Bcrypt(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///User_info.db'
app.config['SECRET_KEY'] = 'thisisasecretkey'
db = SQLAlchemy(app)
login_manager = LoginManager(app)

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fname = db.Column(db.String(50), nullable=False)
    mname = db.Column(db.String(50), nullable=True)
    lname = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

# Ensure database and tables are created
with app.app_context():
    db.create_all()

class RegisterForm(FlaskForm):
    email = StringField('Email', validators=[InputRequired(), Length(min=4, max=50)])
    password = PasswordField('Password', validators=[InputRequired(), Length(min=4, max=20)])
    fname = StringField('First Name', validators=[InputRequired(), Length(max=50)])
    mname = StringField('Middle Name', validators=[Length(max=50)])
    lname = StringField('Last Name', validators=[InputRequired(), Length(max=50)])
    submit = SubmitField('Register')

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    fname = data.get('fname')
    mname = data.get('mname')
    lname = data.get('lname')

    if not email or not password or not fname or not lname:
        return jsonify({'message': 'Email, password, first name, and last name are required'}), 400

    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({'message': 'User already exists'}), 409

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    new_user = User(email=email, password=hashed_password, fname=fname, mname=mname, lname=lname)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'User registered successfully'}), 201

@app.route('/login', methods=['POST'])
def api_login():
    data = request.json
    if not data or 'email' not in data or 'password' not in data:
        return jsonify({'message': 'Invalid request'}), 400
    
    email = data['email']
    password = data['password']
    
    user = User.query.filter_by(email=email).first()
    if not user or not bcrypt.check_password_hash(user.password, password):
        return jsonify({'message': 'Invalid credentials'}), 401
    
    login_user(user)
    return jsonify({'message': 'Login successful'})

if __name__ == '__main__':
    app.run(debug=True)

