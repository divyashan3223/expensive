import { axios } from "../../libs/axios";

export const createLogin = async (data) => {
  try {
    const response = await axios.post("/auth/login", data);
    return response.data;
  } catch (error) {
    console.error("Error adding transaction:", error);
    throw error;
  }
};
