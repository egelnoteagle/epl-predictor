from flask import Blueprint

bp = Blueprint('main', __name__)

# Import all the route files to register them with the blueprint
from app.routes import predict, home