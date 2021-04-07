from flask import Blueprint, jsonify

main = Blueprint('main', __name__)

@main.route('/add_todo', methods=['POST'])
def add_todo():
    return 'Done', 201

@main.route('/todos')
def todos():

    todos = []

    return jsonify({'todos' : todos})