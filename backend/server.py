import sys
import auth, Student, Lecturer, questions
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
    return response.data


APP = Flask(__name__)
CORS(APP)

# Maybe store token in URL of each webpage

# Auth
@APP.route('/')
def homepage():
    pass

@APP.route('/login', methods=['POST'])
def login():
    email = request.form["email"]
    password = request.form["password"]

    return auth.login(email, password)

@APP.route('/register', methods=['POST'])
def register():
    email = request.form["email"]
    password = request.form["password"]
    phone = request.form["phone"]
    name = request.form["name"]

    auth.register(email, password, phone, name)

@APP.route('/logout', methods=['POST'])
def logout():
    token = request.form["token"]

    auth.logout(token)


@APP.route('/dashboard/create-group', methods=['POST'])
def createGroup():
    courseCode = request.form["courseCode"]
    password = request.form["password"]

    Lecturer.addCourse(courseCode, password)

@APP.route('/dashboard/join-group', methods=['POST'])
def joinGroup():
    courseCode = request.form["courseCode"]
    password = request.form["password"]
    token = request.form["token"]

    Student.joinCourse(courseCode, password, token)

@APP.route('/quiz/getQ', methods=['GET'])
def chooseQuiz():
    courseCode = request.form["courseCode"]
    token = request.form["token"]

    return json.dumps(questions.chooseQestion(token, courseCode))

@APP.route('/quiz/updateQ', methods=['POST'])
def updateQ():
    qID = request.form["qID"]
    token = request.form["token"]
    course = request.form["course"]
    answer = request.form["answer"]

    questions.questionCorrect(token, course, qID, answer)

@APP.route('')
def main():
    if __name__ == "__main__":
        APP.run(host='localhost', port=8080)