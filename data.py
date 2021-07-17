import json
###
# loads info at server startup
# To access list of courses or list of users import data at the top of you py file.
# Then the list can be accessed by data.courses or data.users.
###
def init():
    #json.load loads file directly into python datatype
    global users
    with open('users/users.json') as f:
        users = json.load(f)

    global courses
    with open('classes/courses.json') as f:
        courses = json.load(f)

# Saves all current values for users and classes to their respective JSON files.
# To be completed later since we dont have to save at this point.
# TODO.
def saveData():
    global users
    global courses
    # Ensure all users are logged out before server shutdown.
    for user in users:
        user['token'] = []

