import data
import auth

if __name__ == "__main__":
    data.init()
    token = auth.register("test@test.com.au", "test", "0468306273", "Jamie")
    print("Token is: " + token)
    #print(data.users)
    print(auth.authenticate(token))
    auth.logout(token)
    print(data.users)