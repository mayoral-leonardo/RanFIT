const INITIAL_STATE = {
  _id: undefined,
  name: undefined,
  level: undefined
}

export const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'AUTH_SIGNIN':
      return {
        ...state,
        isAuth: true,
        ...action.payload
      }

    case 'AUTH_SIGNOUT':
      return INITIAL_STATE

    default:
      return state
  }
}