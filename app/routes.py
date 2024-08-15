from flask import Blueprint

# Create a blueprint object
bp = Blueprint('main', __name__)

# Import routes to register them with the blueprint
from app.routes import predict, home