import data
import Student
###
# Set up a new course - initialise with
# password
def addCourse(courseCode, password):
    data.courses.add(courseCode, password)

#
def addQuestion(Question, courseCode):
    for course in data.courses:
        if courseCode == course.courseCode:
            course.questions.add(Question)

# Adds a student to an available course
def enrollStudent(email, courseCode):
    for course in data.courses:
        if courseCode == course.courseCode:
            password = course.password

    Student.joinCourse(courseCode, password, email)