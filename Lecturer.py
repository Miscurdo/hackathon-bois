import data
import Student
###
# Set up a new course - initialise with
# password
def addCourse(courseCode, password):
    data.courses.append({"class": courseCode, "coursePin": password, "questionList": []})

#
def addQuestion(Question, courseCode):
    for course in data.courses:
        if courseCode == course.courseCode:
            course.questions.add(Question)


# DOES NOTHING - POTENTIALLY REUSE
# Adds a student to an available course
def enrollStudent(email, courseCode):
    for course in data.courses:
        if courseCode == course.courseCode:
            password = course.password

    Student.joinCourse(courseCode, password, email)