from flask import Blueprint

bp = Blueprint('api', __name__)

from app.api import games  # Import games after defining bp to avoid circular import issues