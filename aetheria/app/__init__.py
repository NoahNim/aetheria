import os
from flask import Flask, render_template, request, session, redirect
from flask_cors import CORS
from flask_migrate import Migrate
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_login import LoginManager

from .config import Config

app = Flask(__name__)

@app.route('/')
def hello_world():
    hello = 'hello world'
    print(hello)
    return hello
