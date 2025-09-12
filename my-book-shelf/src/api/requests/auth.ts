import type { ResponseT } from "../../types/response";
import type { CreateUserI, LoginUserI, UserI } from "../../types/user";
import axiosConfig from "../axiosConfig";

export async function RegisterUser(data: CreateUserI) {
    const response = (
        await axiosConfig.post<ResponseT<UserI, string>>("/auth/register", data)
    ).data;
    if (response.success) {
        localStorage.setItem("token", response.token);
    }
    return response;
}
export async function CheckUser() {
    const response = (await axiosConfig.get<ResponseT<UserI>>("/auth")).data;
    return response;
}
export async function Login(data: LoginUserI) {
    const response = (
        await axiosConfig.post<ResponseT<UserI, string>>(`/auth/login`, data)
    ).data;
    if (response.success) {
        localStorage.setItem("token", response.token);
    }
    return response;
}
export async function VerifyEmail(otp: string) {
    const response = (
        await axiosConfig.post<ResponseT<undefined>>(`/auth/verify`, { otp })
    ).data;

    return response;
}
