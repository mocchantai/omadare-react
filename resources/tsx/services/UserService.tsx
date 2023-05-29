import axios, {AxiosResponse} from "axios";
import {UserType} from "../types";

const storeUser = async (formData: UserType): Promise<UserType> => {
    try {
        console.log("今axiosします")
        const response:AxiosResponse<UserType> = await axios.post<UserType>('api/user', formData);
        // console.log("axios終わりました。")
        return response.data;
    } catch (error) {
        console.log("axios失敗しました。")
        console.error("Failed to store user in userService", error);
        throw new Error("Failed to store user");
    }
}

export {
    storeUser,
}
