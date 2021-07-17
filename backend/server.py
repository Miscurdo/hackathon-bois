import sys
from json import dumps
from flask import Flask, request
from flask_cors import CORS

def defaultHandler(err):
    response = err.get_response()
    print('response', err, err.get_response())
    response.data = dumps({
        "code": err.code,
        "name": "System Error",
        "message": err.get_description(),
    })
    response.content_type = 'application/json'
    return response


APP = Flask(__name__)
CORS(APP)

# Auth
@APP.route('/')
def homepage():
    pass

@APP.route('/login', methods=['POST'])
def login():


@APP.route('/register', methods=['POST'])
def register():


@APP.route('/logout', methods=['POST'])
def logout():



@APP.route('/dashboard/create-group', methods=['POST'])
def createGroup():


@APP.route('/dashboard/join-group', methods=['POST'])
def joinGroup():


@APP.route('/quiz')


@APP.route('')
if __name__ == "__main__":
    APP.run(host='localhost', port=8080)