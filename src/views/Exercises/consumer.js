import api from "../../services/api";
import { toast } from "react-toastify"

const exercises = {
  getAll: async (id) => {
    try {
      const response = await api.post("/exercises", { userId: id })
      return response.data.data
    } catch (error) {
      toast.error(error.response.data)
    }
  },
  register: async (data) => {
    try {
      const response = await api.post("/exercise", data)
      return response.data
    } catch (error) {
      toast.error(error.response.data)
    }
  },
}

export default exercises