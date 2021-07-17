import json
###
# loads info at server startup
# To access list of courses or list of users import data at the top of you py file.
# Then the list can be accessed by data.courses or data.users.
###
def init():
    f = open("classes/courses", "r")
    userJSON = f.read()
    f.close()

    f = open("users/users", "r")
    courseJSON = f.read()
    f.close()

    global users = json.loads(userJSON)
    global courses = json.loads(courseJSON)

# Saves all current values for users and classes to their respective JSON files.
# To be completed later since we dont have to save at this point.
# TODO.
def saveData():
    # Ensure all users are logged out before server shutdown.
    for user in users:
        user['token'] = []

