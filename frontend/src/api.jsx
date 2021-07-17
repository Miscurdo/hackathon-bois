const BASEURL = 'http://localhost:8080';

// Gets a list of data for all BigBrain Quizzes (GET /admin/quiz)
export const getQuizzes = async (token) => {
  const response = await fetch(`${BASEURL}/quiz/getQ`, {})

  if (response.status === 200) {
    const data = await response.json();
    return data.quizzes;
  } else if (response.status === 403) {
    throw new Error('Invalid token');
  } else {
    throw new Error('Error occurred while getting quizzes');
  }
}

// Create a new empty BigBrain quiz (POST /admin/quiz/new)
export const newQuiz = async (token, qID, course, answer) => {
  const response = await fetch(`${BASEURL}/quiz/updateQ`, {
    method: 'POST',
    body: JSON.stringify({
      token,
      qID,
      course,
      answer
    })
  })

  if (response.status === 200) {
    const data = await response.json();
    console.log(`New game created with quiz ID ${data.qID}!`)
    return data;
  } else if (response.status === 400) {
    console.log('Bad input');
  } else if (response.status === 403) {
    console.log('Invalid token');
  } else {
    console.log('Error occurred while creating new quiz');
  }
}

// Login (POST /login)
export const login = async (token, email, password) => {
    const response = await fetch(`${BASEURL}/login`, {
      method: 'POST',
      body: JSON.stringify({
        token,
        email,
        password,
        phone,
        name
      })
    })
  
    if (response.status === 200) {
      const data = await response.json();
      console.log(`Registration successful!`)
      return data;
    } else {
      console.log('Error occurred while logging in');
    }
}

// Register (POST /register)
export const register = async (token, email, password, phone, name) => {
    const response = await fetch(`${BASEURL}/register`, {
      method: 'POST',
      body: JSON.stringify({
        token,
        email,
        password,
        phone,
        name
      })
    })
  
    if (response.status === 200) {
      const data = await response.json();
      console.log(`Registration successful!`)
      return data;
    } else {
      console.log('Error occurred while registering');
    }
}

// Login (POST /login)
export const login = async (token, email, password) => {
    const response = await fetch(`${BASEURL}/login`, {
      method: 'POST',
      body: JSON.stringify({
        token,
        email,
        password
      })
    })
  
    if (response.status === 200) {
      const data = await response.json();
      console.log(`Logging in successful!`)
      return data;
    } else {
      console.log('Error occurred while logging in');
    }
}

// Logout (POST /logout)
export const login = async (token) => {
    const response = await fetch(`${BASEURL}/logout`, {
      method: 'POST',
      body: JSON.stringify({
        token
      })
    })
  
    if (response.status === 200) {
      const data = await response.json();
      console.log(`Logging out successful!`)
      return data;
    } else {
      console.log('Error occurred while logging out');
    }
}

// Create group (POST /dashboard/create-group)
export const createGroup = async (courseCode, password) => {
    const response = await fetch(`${BASEURL}/dashboard/create-group`, {
      method: 'POST',
      body: JSON.stringify({
        courseCode, password
      })
    })
  
    if (response.status === 200) {
      const data = await response.json();
      console.log(`Creating group is successful!`)
      return data;
    } else {
      console.log('Error occurred while creating group');
    }
}

// Join group (POST /dashboard/join-group)
export const createGroup = async (token, courseCode, password) => {
    const response = await fetch(`${BASEURL}/dashboard/join-group`, {
      method: 'POST',
      body: JSON.stringify({
        courseCode, password, token
      })
    })
  
    if (response.status === 200) {
      const data = await response.json();
      console.log(`Joining group is successful!`)
      return data;
    } else {
      console.log('Error occurred while joining group');
    }
}