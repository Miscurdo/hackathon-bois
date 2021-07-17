import data
import auth

from random import randrange

def chooseQestion(token, course):
    courseElem = getCourse(course)
    # Handling case where student is not enrolled in the course. Also should not happen.
    if courseElem == None:
        return None
    
    # Sums the weights of all questions so we know how to divide up our selection.
    totalWeight = 0
    for question in courseElem['questionList']:
        totalWeight += question['weight']
    
    # Handling edge case where student has no courses. idk why just felt like it
    if totalWeight = 0:
        return None

    choice = randrange(totalWeight)

    # Should make each questions likelyhood of appearing equal to their weight
    totalWeight = 0
    for question in courseElem['questionList']:
        totalWeight += question['weight']
        if totalWeight >= choice:
            return question
        
    # If for some reason the above code fails then return the final question in the list
    return courseElem['questionList'][:-1]

def questionCorrect(token, course, qID, answer):
    pass

def getCourse(token, course):
    uID = auth.authenticate(token)
    user = data.users[uID]
    for elem in user['courseList']:
        if elem['courseCode'] == course:
            return elem
    
    return None