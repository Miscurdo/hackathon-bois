import data
import auth
import Lecturer
import Student

if __name__ == "__main__":
    data.init()
    token = auth.register("test@test.com.au", "test", "0468306273", "Jamie")
    #print("Token is: " + token)
    #print(data.users)
    Lecturer.addCourse("Hackathon", "")
    Lecturer.addQuestion({"qID": 2, "question": "How is it going?", "ansList": ["A","B","C"], "correctAns": "D", "tags": ["Hackathon", "pogging"]}, "Hackathon")
    
    print(data.courses)
    Student.joinCourse("Hackathon", "", token)
    #print(data.users)
    Student.removeCourse("Hackathon", token)
    #print(data.users)
    #print(data.courses)
    #print(auth.authenticate(token))
    auth.logout(token)
    #print(data.users)