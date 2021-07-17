import data
import auth
###

# Helper function checks if token is correct and returns the user
def checkToken(token):
    userID = auth.authenticate(token)
    if (auth.authenticate(token) == None): return
    user = data.users[userID]
    return user

# Given a list of questions add all to the current student
def addQuestions(questions, token):
    user = checkToken(token)

    for question in questions:
        user.questionList.add(question)

# Adds a student to course with corresponding courseCode
# automatically adds all questions associated to that course to student
# only called by lecturer.py
def joinCourse(courseCode, password, token):
    user = checkToken(token)

    for course in data.courses:
        if courseCode == course.courseCode and course.password == password:
            for question in course.questions:
                user.questionList.add(question)

# Removes student from course
# removes all associated questions from that student
def removeCourse(courseCode, token):
    user = checkToken

    for question in user.questionList:
        if question.courseCode == courseCode:
            user.questionList.remove(courseCode)

