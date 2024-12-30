from flask import Flask
from flask_cors import CORS
from routes.users import api_routes  # Correctly import from 'users.py'

app = Flask(__name__)
CORS(app)  # Enable CORS for all domains

# Register the routes Blueprint
app.register_blueprint(api_routes)

if __name__ == "__main__":
    app.run(debug=True)
