###
# Adds a student to course with corresponding courseCode
# automatically adds all questions associated to that course to student
def joinCourse(courseCode, password):
    for course in courses:
        if courseCode == course.courseCode and course.password == password:
            for question in course.questions:
                self.questions.add(question)

# Removes student from course
# removes all associated questions from that student
def removeCourse(courseCode):
    for question in self.questions:
        if question.courseCode == courseCode:
            self.qeustions.remove(courseCode)
