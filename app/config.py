import os

class Config:
    SECRET_KEY = os.environ.get('POSTGRES_PASSWORD') or 'you-will-never-guess'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'postgresql://username:password@host:port/dbname'
    SQLALCHEMY_TRACK_MODIFICATIONS = False