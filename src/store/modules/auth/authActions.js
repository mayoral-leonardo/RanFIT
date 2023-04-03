export const authActions = {
  signIn: (user) => ({
    type: 'AUTH_SIGNIN',
    payload: user
  }),

  signOut: () => ({
    type: 'AUTH_SIGNOUT'
  })
}