import { useReducer } from 'react'

const ACTION = {
  ADD_FIELD_REGISTER: 'ADD_FIELD_REGISTER',
  CLEAR_FIELD_REGISTER: 'CLEAR_FIELD_REGISTER',
}

const ACTION_REDUCERD = {
  [ACTION.ADD_FIELD_REGISTER]: (state, action) => ({
    ...state,
    [action.field]: action.payload,
  }),
  [ACTION.CLEAR_FIELD_REGISTER]: (state, action) => ({
    username: '',
    name: '',
    password: '',
    avatar: '',
    biography: '',
    phone: 0,
    email: '',
  }),
}

const REDUCER = (state, action) => {
  console.log(state)
  const actionReducer = ACTION_REDUCERD[action.type]
  return actionReducer ? actionReducer(state, action) : state
}

export const useRegister = () => {
  const initialRegisterState = {
    username: '',
    name: '',
    password: '',
    avatar: '',
    biography: '',
    phone: 0,
    email: '',
  }
  const [state, dispatch] = useReducer(REDUCER, initialRegisterState)

  return {
    username: state.username,
    name: state.name,
    password: state.password,
    avatar: state.avatar,
    biography: state.biography,
    phone: state.phone,
    email: state.email,
    AddRegisterField: (name, value) => {
      dispatch({
        type: ACTION.ADD_FIELD_REGISTER,
        payload: value,
        field: name,
      })
    },
    ClearRegisterField: () => {
      dispatch({
        type: ACTION.CLEAR_FIELD_REGISTER,
      })
    },
  }
}
