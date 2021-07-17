import data
###
questionList = []

# Adds a student to course with corresponding courseCode
# automatically adds all questions associated to that course to student
def joinCourse(courseCode, password):
    for course in data.courses:
        if courseCode == course.courseCode and course.password == password:
            for question in course.questions:
                questionList.add(question)

# Removes student from course
# removes all associated questions from that student
def removeCourse(courseCode):
    for question in questionList:
        if question.courseCode == courseCode:
            questionList.remove(question)
