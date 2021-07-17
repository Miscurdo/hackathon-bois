import json
###
# loads info at server startup
# To access list of courses or list of users import data at the top of you py file.
# Then the list can be accessed by data.courses or data.users.
###
def init():
    #json.load loads file directly into python datatype
    global users = json.load(users/users)
    global courses = json.load(classes/courses)

# Saves all current values for users and classes to their respective JSON files.
# To be completed later since we dont have to save at this point.
# TODO.
def saveData():
    # Ensure all users are logged out before server shutdown.
    for user in users:
        user['token'] = []

