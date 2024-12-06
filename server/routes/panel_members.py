# routes/panel_members.py
from flask import Blueprint, request, jsonify
from models import PanelMember, User, db

panel_member_routes = Blueprint('panel_members', __name__)

@panel_member_routes.route('/api/panel-members', methods=['GET'])
def get_panel_members():
    members = PanelMember.query.all()
    return jsonify([{'id': member.id, 'name': member.name} for member in members])

@panel_member_routes.route('/api/panel-members', methods=['POST'])
def add_panel_member():
    data = request.get_json()
    user_id = data.get('userId')
    
    user = User.query.get(user_id)
    if user:
        new_member = PanelMember(name=user.username, user_id=user.id)
        db.session.add(new_member)
        db.session.commit()
        return jsonify({"msg": "Panel member added"}), 201
    return jsonify({"msg": "User not found"}), 404
