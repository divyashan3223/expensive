import { axios } from "../../libs/axios";

const token = import.meta.env.VITE_APP_TOKEN;

export const getAllTransactions = async () => {
  try {
    const response = await axios.get(`/transactions`);
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};

export const addTransaction = async (data) => {
  try {
    const response = await axios.post("/transactions", data);
    return response.data;
  } catch (error) {
    console.error("Error adding transaction:", error);
    throw error;
  }
};

export const removeTransaction = async (id) => {
  try {
    const response = await axios.delete(`/transactions/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error adding transaction:", error);
    throw error;
  }
};

export const updateTransaction = async ({ id, data }) => {
  try {
    const response = await axios.put(`/transactions/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error adding transaction:", error);
    throw error;
  }
};
