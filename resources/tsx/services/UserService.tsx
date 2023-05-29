import {FriendType} from "../types";
import axios, {AxiosResponse} from "axios";

type UserType = {
    name: string;
    email: string;
    password: string;
}

const storeUser = async (formData: UserType): Promise<UserType> => {
    try {
        const response:AxiosResponse<UserType> = await axios.post<UserType>('api/user', formData);
        return response.data;
    } catch (error) {
        console.error("Failed to store user", error);
        throw new Error("Failed to store user");
    }
}
