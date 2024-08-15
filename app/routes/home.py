from flask import render_template
from app.routes import bp

@bp.route('/')
def home():
    # Home page logic goes here
    return render_template('home.html')