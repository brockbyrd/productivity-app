from . import db

class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String)
    points = db.Column(db.Integer)

class Goal(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String)
    points = db.Column(db.Integer)

class Reward(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String)
    points = db.Column(db.Integer)