from flask import Flask
from flask_sqlalchemy import SQLAlchemy

def create_app():
    app = Flask(__name__)

    app.config['SQLAlchemy_DATABASE_URI'] = 'sqlite:///database.db'

    return app