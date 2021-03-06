from flask import Blueprint, jsonify, request
from . import db
from .models import Todo, Goal, Reward

main = Blueprint('main', __name__)

@main.errorhandler(500)
def print_error(err):
    print(err.message)

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
        todos.append({'id' : todo.id, 'content' : todo.content, 'points' : todo.points})

    return jsonify({'todos' : todos})

@main.route('/todo/<id>', methods=['DELETE'])
def delete_todo(id):
   response = {}
   todo = Todo.query.get(id)
   response['id'] = todo.id



   db.session.delete(todo)
   db.session.commit()

   return 'Done', 201

@main.route('/add_goal', methods=['POST'])
def add_goal():
    goal_data = request.get_json()

    new_goal = Goal(content=goal_data['content'], points=goal_data['points'])

    db.session.add(new_goal)
    db.session.commit()

    return 'Done', 201

@main.route('/goals')
def goals():
    goal_list = Goal.query.all()
    goals = []

    for goal in goal_list:
        goals.append({'id' : goal.id, 'content' : goal.content, 'points' : goal.points})

    return jsonify({'goals' : goals})

@main.route('/goal/<id>', methods=['DELETE'])
def delete_goal(id):
    response = {}
    goal = Goal.query.get(id)
    response['id'] = goal.id

    db.session.delete(goal)
    db.session.commit()

    return 'Done', 201

@main.route('/add_reward', methods=['POST'])
def add_reward():
    reward_data = request.get_json()

    new_reward = Reward(content=reward_data['content'], points=reward_data['points'])

    db.session.add(new_reward)
    db.session.commit()

    return 'Done', 201

@main.route('/rewards')
def rewards():
    reward_list = Reward.query.all()
    rewards = []

    for reward in reward_list:
        rewards.append({'id' : reward.id, 'content' : reward.content, 'points' : reward.points})

    return jsonify({'rewards' : rewards})

@main.route('/reward/<id>', methods=['DELETE'])
def delete_reward(id):
    response = {}
    reward = Reward.query.get(id)
    response['id'] = reward.id

    db.session.delete(reward)
    db.session.commit()

    return 'Done', 201