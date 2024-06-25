import { axios } from "../../libs/axios";

// const token = import.meta.env.VITE_APP_TOKEN;

export const getAllCategories = async () => {
    try {
        const response = await axios.get(`/categories`);
        return response.data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
};

export const addCategories = async (data) => {
    try {
        const response = await axios.post("/categories", data);
        return response.data;
    } catch (error) {
        console.error("Error adding categories:", error);
        throw error;
    }
};

export const removeCategories = async (id) => {
    try {
        const response = await axios.delete(`/categories/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error removing categories:", error);
        throw error;
    }
};

export const updateCategories = async ({ id, data }) => {
    try {
        const response = await axios.put(`/categories/${id}`, data);
        return response.data;
    } catch (error) {
        console.error("Error updating categories:", error);
        throw error;
    }
};
