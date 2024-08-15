from flask import render_template
from app.routes import bp

@bp.route('/predict', methods=['GET', 'POST'])
def predict():
    # Prediction logic goes here
    return render_template('predict.html')