import api from "../../services/api";

export const signInConsumer = async (email, password) => {
  try {
    const response = await api.post("/login", { email, password })
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const signOutConsumer = async (email, password) => {
  try {
    const response = await api.post("/logout", { email, password })
    return response.data
  } catch (error) {
    console.error(error)
  }
}

signInConsumer