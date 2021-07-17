import data
import auth
###

# Helper function checks if token is correct and returns the user
def checkToken(token):
    userID = auth.authenticate(token)
    if (auth.authenticate(token) == None): return
    user = data.users[userID]
    return user



# Adds a student to course with corresponding courseCode
# automatically adds all questions associated to that course to student
# initialising their weights as 1 to start
def joinCourse(courseCode, password, token):
    user = checkToken(token)

    for course in data.courses:
        if courseCode == course['courseCode'] and course['coursePin'] == password:
            qList = []
           
            for question in course['questionList']:
                qList.append({"qID": question['qID'], "weight": 1, "tags": question['tags']})
            
            newCourse = {"courseCode": courseCode, "questionList": qList}
            user['courseList'].append(newCourse)
            return

    

# Removes student from course
# removes all associated questions from that student
def removeCourse(courseCode, token):
    user = checkToken(token)

    for course in user['courseList']:
        if course['courseCode'] == courseCode:
            user['courseList'].remove(course)
            return

