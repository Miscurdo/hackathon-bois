import data
import auth
###

# Adds a student to course with corresponding courseCode
# automatically adds all questions associated to that course to student
def joinCourse(courseCode, password, token):
    userID = auth.authenticate(token)
    if (auth.authenticate(token) == None): return
    user = data.users[userID]

    for course in data.courses:
        if courseCode == course.courseCode and course.password == password:
            for question in course.questions:
                user.questionList.add(question)

# Removes student from course
# removes all associated questions from that student
def removeCourse(courseCode, token):
    userID = auth.authenticate(token)
    if (auth.authenticate(token) == None): return
    user = data.users[userID]

    for question in user.questionList:
        if question.courseCode == courseCode:
            user.questionList.remove(courseCode)
