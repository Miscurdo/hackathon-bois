import json
import hashlib

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
    newStudent['password'] = hashlib.sha256(newStudent['password'].encode()).hexdigest()
    newStudent['questionList'] = []
    newStudent['token'] = []
###
# input: {'email':, 'password':}
# result: {'token':}
# Assigns a token to the user.
# If the user is already logged in, overwrite their token.
###
def login(JSONInput):
    pass

###
# input: {'token'}
# Sets user's token to be null.
###
def logout(JSONInput)
    pass

###
# input: {'email':, 'phone':}
# Takes either an email or phone number and texts a link to reset their password.
# if only one is provided make the other null
###
def passreset(JSONInput):
    pass
###
# input: {'token'}
# Takes a token and confirms it is valid. If a user is logged in with that token it returns the user id.
# if user is not logged in returns null
###
def authenticate(JSONInput):
    pass