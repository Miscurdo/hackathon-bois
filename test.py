import data
import auth
import Lecturer
import Student
import questions

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

<<<<<<< HEAD
    newQuestions = questionGen()
    #for question in newQuestions:
            #Lecturer.addQuestion(questions, "Hackathon")
    
    Student.joinCourse("Hackathon", "", token)
    #print(question.chooseQuestion(token, "Hackathon"))
=======
    questionGen()
    #for question in newQuestions:
        #Lecturer.addQuestion(questions, "Hackathon")
    #    pass
    
    #print(data.courses)
    
    Student.joinCourse("Hackathon", "", token)
<<<<<<< HEAD
    print(data.users)
    print(questions.chooseQestion(token, "Hackathon"))
=======
    print(question.chooseQuestion(token, "Hackathon"))
>>>>>>> 48f4e4361df95d3e38559901d6e125184ba300af
>>>>>>> f4176294e0c05559414d5d3aeaa4a4ac0e3db1f8

    #print(data.courses)