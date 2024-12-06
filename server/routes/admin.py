# routes/admin.py
from flask import Blueprint, request, jsonify
from models import User, db, bcrypt
from flask_jwt_extended import create_access_token

admin_routes = Blueprint('admin', __name__)

@admin_routes.route('/api/admin/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    admin = User.query.filter_by(username=username, is_admin=True).first()
    if admin and bcrypt.check_password_hash(admin.password, password):
        access_token = create_access_token(identity=admin.id)
        return jsonify(access_token=access_token), 200
    return jsonify({"msg": "Bad username or password"}), 401
