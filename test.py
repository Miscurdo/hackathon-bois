import data
import auth
import Lecturer
import Student
import questions

def printUserQs(token):
    user = auth.authenticate(token)
    print(data.users[user]['courseList'])

def questionGen():
    Lecturer.addQuestion({"qID": 3, "question": "Who is on first?", "ansList": ["who?","what?","when"], "correctAns": "who", "tags": ["Hackathon", "monty Python"]}, "Hackathon")
    Lecturer.addQuestion({"qID": 4, "question": "Whats the answer to life the universe and everything?", "ansList": ["41","0","idk"], "correctAns": "42", "tags": ["Hitchhiker's Guidew", "Joke"]}, "Hackathon")

    #questionList = []
    #questionList.append()
    #questionList.append()
    #questionList.append({"qID": 5, "question": "Airspeed velocity of an unladen sparrow?", "ansList": ["idk","7","what?"], "correctAns": "African or European", "tags": ["Birds", "monty Python"]})
    #return questionList

if __name__ == "__main__":
    data.init()
    token = auth.register("test@test.com.au", "test", "0468306273", "Jamie")
    #print("Token is: " + token)
    #print(data.users)
    Lecturer.addCourse("Hackathon", "")
    Lecturer.addQuestion({"qID": 2, "question": "How is it going?", "ansList": ["A","B","C"], "correctAns": "D", "tags": ["Hackathon", "pogging"]}, "Hackathon")
    Lecturer.addQuestion({"qID": 3, "question": "haha", "ansList": ["teehee"], "correctAns": "reeves", "tags": ["Hackathon", "jokes"]}, "Hackathon")
    #print(data.courses)
    
    #print(data.users)
    #Student.removeCourse("Hackathon", token)
    #print(data.users)
    #print(data.courses)
    #print(auth.authenticate(token))
    #auth.logout(token)
    #print(data.users)

    questionGen()
    #for question in newQuestions:
        #Lecturer.addQuestion(questions, "Hackathon")
    #    pass
    
    #print(data.courses)
    
    Student.joinCourse("Hackathon", "", token)

    #print(data.users)
    #print(questions.chooseQestion(token, "Hackathon"))

    questions.questionCorrect(token, "Hackathon", 2, False)
    questions.questionCorrect(token, "Hackathon", 3, True)
    printUserQs(token)

    #print(data.courses)