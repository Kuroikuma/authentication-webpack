import { useReducer } from 'react'

const getIsLoggedIn =
  typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem('isLoggedIn'))
    : null
// Perform localStorage action

const getUser =
  typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem('user'))
    : null

const ACTION = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
}

const ACTION_REDUCER = {
  [ACTION.LOGIN]: (state, action) => {
    localStorage.setItem(
      'isLoggedIn',
      JSON.stringify(action.payload.isLoggedIn)
    ),
      localStorage.setItem('user', JSON.stringify(action.payload.user))
    return {
      ...state,
      isLoggedIn: action.payload.isLoggedIn,
      user: action.payload.user,
    }
  },
  [ACTION.LOGOUT]: (state, action) => {
    localStorage.clear()
    return {
      ...state,
      isLoggedIn: false,
      user: null,
    }
  },
}

const REDUCER = (state, action) => {
  console.log(state)
  const actionReducer = ACTION_REDUCER[action.type]
  return actionReducer ? actionReducer(state, action) : state
}

export const useLogin = () => {
  const initialState = {
    isLoggedIn: getIsLoggedIn || false,
    user: getUser || null,
  }

  const [state, dispatch] = useReducer(REDUCER, initialState)

  return {
    isLoggedIn: state.isLoggedIn,
    user: state.user,
    Login: (value) => {
      dispatch({
        type: ACTION.LOGIN,
        payload: value,
      })
    },
    Logout: () => {
      dispatch({
        type: ACTION.LOGOUT,
      })
    },
  }
}
