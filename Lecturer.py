import data
import Student
###
# Set up a new course - initialise with
# password
def addCourse(courseCode, password):
    data.courses.append({"courseCode": courseCode, "coursePin": password, "questionList": []})

# Add question to all students
# called by addQuestion
def updateStudentsA(courseCode, Question):
    for student in data.users:
        for course in student['courseList']:
            if course['courseCode'] == courseCode:
                course.append(Question)

# Remove question from all students
# called by removeQuestion
def updateStudentsR(courseCode, Question):
    for student in data.users:
        for course in student['courseList']:
            if course['courseCode'] == courseCode:
                course.remove(Question)


#
def addQuestion(Question, courseCode):
    for course in data.courses:
        if courseCode == course['courseCode']:
            course['questionList'].append(Question)

    updateStudentsA(courseCode, Question)
#
def removeQuestion(Question, courseCode):
    for course in data.courses:
        if courseCode == course['courseCode']:
            course['questionList'].remove(Question)

    updateStudentsA(courseCode, Question)



# DOES NOTHING - POTENTIALLY REUSE
# Adds a student to an available course
def enrollStudent(email, courseCode):
    for course in data.courses:
        if courseCode == course.courseCode:
            password = course.password

    Student.joinCourse(courseCode, password, email)