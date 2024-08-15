from app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    points = db.Column(db.Integer, default=0)
    predictions = db.relationship('Prediction', backref='user', lazy=True)

class Game(db.Model):  # This corresponds to the 'fixtures' table
    id = db.Column(db.Integer, primary_key=True)
    season = db.Column(db.String(20), nullable=False)
    round = db.Column(db.Integer, nullable=False)
    date = db.Column(db.DateTime, nullable=False)
    home_team = db.Column(db.String(100), nullable=False)
    away_team = db.Column(db.String(100), nullable=False)
    home_team_badge = db.Column(db.String(255))
    away_team_badge = db.Column(db.String(255))
    venue = db.Column(db.String(255))
    result = db.Column(db.String(10))
    predictions = db.relationship('Prediction', backref='game', lazy=True)

class Prediction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    game_id = db.Column(db.Integer, db.ForeignKey('game.id'), nullable=False)
    prediction = db.Column(db.String(10), nullable=False)
    points_awarded = db.Column(db.Integer, default=0)