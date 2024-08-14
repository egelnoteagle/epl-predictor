from flask import jsonify
from app.api import bp  # Import bp from the correct location

@bp.app_errorhandler(404)
def not_found_error(error):
    response = jsonify({'error': 'Not found'})
    response.status_code = 404
    return response

@bp.app_errorhandler(500)
def internal_error(error):
    response = jsonify({'error': 'Internal server error'})
    response.status_code = 500
    return response