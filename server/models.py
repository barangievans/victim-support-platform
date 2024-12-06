from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(128), nullable=False)

class PanelMember(db.Model):
    __tablename__ = 'panel_members'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)  # This is the member name
    role = db.Column(db.String(80), nullable=False)
    services_allocated = db.Column(db.String(255))
    status = db.Column(db.String(50))

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'role': self.role,
            'status': self.status,
        }

class Victim(db.Model):
    __tablename__ = 'victims'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    support_service_id = db.Column(db.Integer, db.ForeignKey('services.id'))
    status = db.Column(db.String(50))

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'support_service_id': self.support_service_id,
            'status': self.status,
        }

class Service(db.Model):
    __tablename__ = 'services'
    id = db.Column(db.Integer, primary_key=True)
    service_name = db.Column(db.String(80), nullable=False)
    description = db.Column(db.String(255))
    available_panel_members = db.Column(db.String(255))

    def to_dict(self):
        return {
            'id': self.id,
            'service_name': self.service_name,
            'description': self.description,
        }
