from flask import render_template, redirect, url_for
from app import db
from app.models import User, Game, Prediction
from app.main import bp

@bp.route('/', endpoint='main_index')
def index():
    standings = []  # Placeholder for standings logic
    return render_template('index.html', standings=standings)

@bp.route('/predict', methods=['GET', 'POST'])
def predict():
    # Fetch games for the current week
    games = []  # Replace with actual logic to fetch games
    # Handle prediction form submission
    return render_template('predict.html', games=games)