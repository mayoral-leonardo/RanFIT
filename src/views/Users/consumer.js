import api from "../../services/api";
import { toast } from "react-toastify"

const users = {
  getAll: async () => {
    try {
      const response = await api.get("/users")
      return response.data.data
    } catch (error) {
      toast.error(error.response.data)
    }
  },
  register: async (data) => {
    try {
      const response = await api.post("/user", data)
      return response.data
    } catch (error) {
      toast.error(error.response.data)
    }
  },
}

export default users