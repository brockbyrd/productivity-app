from flask import Blueprint, jsonify, request
from . import db
from .models import Todo

main = Blueprint('main', __name__)

@main.route('/add_todo', methods=['POST'])
def add_todo():
    todo_data = request.get_json()

    new_todo = Todo(content=todo_data['content'], points=todo_data['points'])

    db.session.add(new_todo)
    db.session.commit()

    return 'Done', 201

@main.route('/todos')
def todos():
    todo_list = Todo.query.all()
    todos = []

    for todo in todo_list:
        todos.append({'content' : todo.content, 'points' : todo.points})

    return jsonify({'todos' : todos})