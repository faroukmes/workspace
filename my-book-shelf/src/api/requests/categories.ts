import type { CategoryI } from "../../types/categories";
import type { ResponseT } from "../../types/response";
import axiosConfig from "../axiosConfig";

export async function GetCategories() {
    const response = await axiosConfig.get<ResponseT<CategoryI[]>>(
        "/categories"
    );
    return response.data;
}

export async function GetCategoryById(id: string) {
    const response = await axiosConfig.get<ResponseT<CategoryI>>(
        `/categories/${id}`
    );
    return response.data;
}
export async function CreateCategory(name: string) {
    const response = await axiosConfig.post<ResponseT<CategoryI>>(
        "/categories",
        { name }
    );
    return response.data;
}

export async function UpdateCategory(id: string, name: string) {
    const response = await axiosConfig.put<ResponseT<CategoryI>>(
        `/categories/${id}`,
        { name }
    );
    return response.data;
}
export async function DeleteCategory(id: string) {
    const response = await axiosConfig.delete<ResponseT<CategoryI>>(
        `/categories/${id}`
    );
    return response.data;
}
