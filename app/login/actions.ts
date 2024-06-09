"use server";
// import { signIn } from "@/auth";

export async function authenticate(prevState: any, formData: FormData) {
    const username = formData.get('username');
    const password = formData.get('password');

    if (!username || !password) return {
        ...prevState,
        code: "LOGIN_ERROR",
        message: "Username and password are required"
    };

    try {
        return {
            ...prevState,
            message: "Login success",
            code: "LOGIN_SUCCESS",
        };
    } catch (error: any) {
        return {
            ...prevState,
            message: "Login failed",
            code: "LOGIN_ERROR",
        };
    }
}
