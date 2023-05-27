import api from "../../services/api";

const signInConsumer = async (email, password) => {
  try {
    const response = await api.post("/login", { email, password })
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export default signInConsumer