# Adds user to the list of users. Will also then log them in.
def register(email, password, phone):
    pass

# Assigns a token to the user.
# If the user is already logged in, overwrite their token.
def login(email, password):
    pass

# Sets user's token to be null.
def logout(token)
    pass

# Takes either an email or phone number and texts a link to reset their password.
def passreset(email, phone):
    pass

# Takes a token and confirms it is valid. If a user is logged in with that token it returns the user id.
def authenticate(token):
    pass