import os
from flask import Flask, render_template, request, session, redirect
from flask_cors import CORS
from flask_migrate import Migrate
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_login import LoginManager

from .models import db, User

from .config import Config

app = Flask(__name__)

# Tell flask about our seed commands
# app.cli.add_command(seed_commands)

app.config.from_object(Config)

@app.route('/')
def hello_world():
    hello = 'hello world'
    print(hello)
    return hello
