from flask import Blueprint

# Initialize the main Blueprint
bp = Blueprint('main', __name__)

# Import the routes to associate them with the Blueprint
from app.main import routes