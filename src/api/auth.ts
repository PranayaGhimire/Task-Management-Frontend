import { ILogin, IRegister } from "@/types/type";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_URL;
export const useRegisterUser = () => 
    useMutation({
        mutationFn: async (data:IRegister) => {
            const response = await axios.post(`${baseUrl}/auth/register`,data);
            return response.data;
        } 
    })

export const useLoginUser = () => 
    useMutation({
        mutationFn: async (data:ILogin) => {
            const response = await axios.post(`${baseUrl}/auth/login`,data);
            return response.data;
        }
    })