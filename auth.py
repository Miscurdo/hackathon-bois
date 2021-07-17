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
def register(JSONInput):
    newStudent = json.loads(JSONInput)
    password = newStudent['password']
    newStudent['password'] = hashlib.sha256(newStudent['password'].encode()).hexdigest()
    newStudent['questionList'] = []
    newStudent['token'] = []

    data.users.append(newStudent)

    return login(json.dumps({'email': newStudent['email'], 'password': password}))

###
# input: {'email':, 'password':}
# result: {'token':}
# Assigns a token to the user.
# If the user is already logged in, overwrite their token.
###
def login(JSONInput):
    user = json.loads(JSONInput)
    for elem in data.users:
        if elem['email'] == user['email'] and elem['password'] == hashlib.sha256(newStudent['password'].encode()).hexdigest():
            token = generateToken()
            elem['token'].append(token)
            return json.dumps({'token': token})
        elif elem['email'] == user['email']:
            # Passwords do not match
            return
    
    return

###
# input: {'token'}
# Sets user's token to be null.
###
def logout(JSONInput):
    tokenInput = json.loads(JSONInput)
    userID = authenticate(tokenInput['token'])
    if userID == null:
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
def passreset(JSONInput):
    pass
###
# input: {'token'}
# Takes a token and confirms it is valid. If a user is logged in with that token it returns the user id.
# if user is not logged in returns null
###
def authenticate(JSONInput):
    tokenInput = json.dumps(JSONInput)

    # Finds which index user with the token inputted is at
    i = 0
    for user in data.users:
        if user['token'].contains(tokenInput['token']):
            return i
        i += 1
    
    # no user with such token
    return None

def generateToken():
    return uuid4()
