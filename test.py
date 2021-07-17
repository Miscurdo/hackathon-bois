import data
import auth
import Lecturer
import Student

if __name__ == "__main__":
    data.init()
    token = auth.register("test@test.com.au", "test", "0468306273", "Jamie")
    print("Token is: " + token)
    #print(data.users)
    Lecturer.addCourse("Hackathon", "")
    Lecturer.
    print(data.courses)
    #print(auth.authenticate(token))
    auth.logout(token)
    #print(data.users)