import api from "../../services/api";

const exercises = {
  getAll: async () => {
    try {
      const response = await api.get("/exercises")
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
  register: async (data) => {
    try {
      const response = await api.post("/exercise",  data )
      return response.data
    } catch (error) {
      console.error(error)
    }
  },
}

export default exercises