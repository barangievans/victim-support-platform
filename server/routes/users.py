from flask import Blueprint, request, jsonify

api_routes = Blueprint('api_routes', __name__)

# Example route to get all users
@api_routes.route('/api/users', methods=['GET'])
def get_users():
    # In a real app, you'd retrieve users from the database
    users = [
        {"id": 1, "name": "John Doe", "email": "john.doe@example.com"},
        {"id": 2, "name": "Jane Doe", "email": "jane.doe@example.com"}
    ]
    return jsonify(users)

# Example route to add a new user
@api_routes.route('/api/users', methods=['POST'])
def add_user():
    data = request.get_json()  # Get JSON data from the request body
    new_user = {
        "id": 3,  # For example, this would come from the database
        "name": data['name'],
        "email": data['email']
    }
    return jsonify(new_user), 201
