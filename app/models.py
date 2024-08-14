from app import db
from flask_login import UserMixin

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True)
    password_hash = db.Column(db.String(128))
    predictions = db.relationship('Prediction', backref='user', lazy='dynamic')

    def __repr__(self):
        return f'<User {self.username}>'

class Game(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    match_id = db.Column(db.Integer, unique=True)
    home_team = db.Column(db.String(64))
    away_team = db.Column(db.String(64))
    match_date = db.Column(db.DateTime)
    home_score = db.Column(db.Integer)
    away_score = db.Column(db.Integer)

    def __repr__(self):
        return f'<Game {self.home_team} vs {self.away_team}>'

class Prediction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    game_id = db.Column(db.Integer, db.ForeignKey('game.id'))
    prediction = db.Column(db.String(64))  # 'home', 'away', or 'draw'
    points = db.Column(db.Integer, default=0)

    def __repr__(self):
        return f'<Prediction {self.prediction} for game {self.game_id}>'