const storedUser = JSON.parse(localStorage.getItem("loggedUser"))

const INITIAL_STATE = {
  _id: storedUser && storedUser._id ? storedUser._id : undefined,
  name: storedUser && storedUser.name ? storedUser.name : undefined,
  level: storedUser && storedUser.level ? storedUser.level : undefined
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
      return {
        _id: undefined,
        name: undefined,
        level: undefined,
      }

    default:
      return state
  }
}