// Perform localStorage action
const getIsLoggedIn =
  typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem('isLoggedIn'))
    : null

// Perform localStorage action
const getUser =
  typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem('user'))
    : null

export const initialState = {
  isLoggedIn: getIsLoggedIn || false,
  user: getUser || null,
  client_id_git: process.env.REACT_APP_CLIENT_ID_GIT,
  client_secret_git: process.env.REACT_APP_CLIENT_SECRET_GIT,
  client_id_google: process.env.REACT_APP_CLIENT_ID_GOOGLE,
  client_secret: process.env.REACT_APP_CLIENT_SECRET,
  proxy_url: process.env.REACT_APP_PROXY_URL,
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN': {
      localStorage.setItem(
        'isLoggedIn',
        JSON.stringify(action.payload.isLoggedIn)
      )
      localStorage.setItem('user', JSON.stringify(action.payload.user))
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        user: action.payload.user,
      }
    }
    case 'LOGOUT': {
      localStorage.clear()
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      }
    }
    default:
      return state
  }
}
