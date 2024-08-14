from flask import jsonify
from app.api import bp  # Import bp from app.api, where it's actually defined
from app.utils.errors import not_found_error, internal_error  # Import specific error handlers if needed

@bp.route('/games', methods=['GET'])
def get_games():
    # Example data: Replace this with actual database queries
    games = [
        {'id': 1, 'homeTeam': 'Team A', 'awayTeam': 'Team B'},
        {'id': 2, 'homeTeam': 'Team C', 'awayTeam': 'Team D'},
        {'id': 3, 'homeTeam': 'Team E', 'awayTeam': 'Team F'}
    ]
    return jsonify(games)