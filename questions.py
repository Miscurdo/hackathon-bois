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
    if totalWeight == 0:
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
    if answer == True:
        modification = -0.1
    else:
        modification = 0.1

    # Find Question and change its weight.
    tags = []
    courseElem = getCourse(token, course)
    for question in courseElem['questionList']:
        if question['qID'] == qID:
            tags = question['tags']
            question['weight'] += modification * question['weight']
    
    # Next find all questions with at least one tag in common and change their weights.
    # This will cause the original question weight to be modified twice.
    # This is not coded against as we want the question increase in weight to be more than that of
    # other questions of the same tag.
    for question in courseElem['questionList']:
        change = False
        for tag in tags:
            if question['tages'].count(tag) != 0:
                change = True
        
        if change == True:
            question['weight'] += modification * question['weight']


# Helper function to return the course element from a student's course list
def getCourse(token, course):
    uID = auth.authenticate(token)
    user = data.users[uID]
    for elem in user['courseList']:
        if elem['courseCode'] == course:
            return elem
    
    return None