import json
import hashlib
from uuid import uuid4

import data

###
# input: JSON {'email': ,'password': ,'phone': ,'name': ,'student': boolean}
# returns: null
#
# student is a boolean variable. False if user is a lecturer, True if student
# Takes a users details and adds them to the list of users.
# Password is hashed before being saved.
###
def register(email, password, phone, name):
    newStudent = {}
    newStudent['email'] = email
    newStudent['phone'] = phone
    newStudent['name'] = name
    newStudent['password'] = hashlib.sha256(password.encode()).hexdigest()
    newStudent['courseList'] = []
    newStudent['token'] = []
    newStudent['ownedCourses'] = []

    data.users.append(newStudent)

    return login(email, password)

###
# input: {'email':, 'password':}
# result: {'token':}
# Assigns a token to the user.
# If the user is already logged in, overwrite their token.
###
def login(email, password):
    for elem in data.users:
        if elem['email'] == email and elem['password'] == hashlib.sha256(password.encode()).hexdigest():
            token = str(generateToken())
            elem['token'].append(token)
            return token
        elif elem['email'] == email:
            # Passwords do not match and so we exit the loop
            return
    
    return

###
# input: {'token'}
# Sets user's token to be null.
###
def logout(token):
    userID = authenticate(token)
    if userID == None:
        return
    
    user = data.users[userID]
    user['token'].remove(token)
    return

###
# input: {'email':, 'phone':}
# Takes either an email or phone number and texts a link to reset their password.
# if only one is provided make the other null
# TODO if time
###
def passreset(email):
    pass
###
# input: {'token'}
# Takes a token and confirms it is valid. If a user is logged in with that token it returns the user id.
# if user is not logged in returns null
###
def authenticate(token):

    # Finds which index user with the token inputted is at
    i = 0
    for user in data.users:
        if user['token'].count(token) > 0:
            return i
        i += 1
    
    # no user with such token
    return None

def generateToken():
    return uuid4()
