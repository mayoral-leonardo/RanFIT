import api from "../../services/api";

const leaderboards = {
  getAll: async () => {
    try {
      const response = await api.get("/ranking")
      return response.data.data
    } catch (error) {
      console.error(error.response.data)
    }
  },
}

export default leaderboards