import api from "../../services/api";

const exercises = {
  getAll: async (id) => {
    try {
      const response = await api.post("/exercises", { userId: id })
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  register: async (data) => {
    try {
      const response = await api.post("/exercise", data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
}

export default exercises