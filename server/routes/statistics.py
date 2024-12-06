# routes/statistics.py
from flask import Blueprint, jsonify
from models import User, PanelMember

statistics_routes = Blueprint('statistics', __name__)

@statistics_routes.route('/api/statistics', methods=['GET'])
def get_statistics():
    total_panel_members = PanelMember.query.count()
    total_victims_supported = 0  # Implement logic to calculate
    total_services_offered = 0  # Implement logic to calculate

    return jsonify({
        "totalPanelMembers": total_panel_members,
        "totalVictimsSupported": total_victims_supported,
        "totalServicesOffered": total_services_offered
    })
