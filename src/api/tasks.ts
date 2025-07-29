import { ITasks } from "@/types/type";
import axiosInstance from "@/utils/axiosInstance";
import { useMutation, useQuery } from "@tanstack/react-query";
export const useGetTasks = () => 
    useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const response =await axiosInstance.get(`/tasks`);
            return response.data;
        }
    });

export const useGetTask = (id:string | undefined) => 
    useQuery({
        queryKey: ['tasks',id],
        queryFn: async () => {
            const response = await axiosInstance.get(`/tasks/${id}`);
            return response.data;
        }
    });

export const useCreateTask = () => 
    useMutation({
        mutationFn: async (data:ITasks) => {
            const response = await axiosInstance.post('/tasks',data);
            return response.data;
        }
    });

export const useUpdateTask = () =>
    useMutation({
        mutationFn: async ({id,data}:{id:string | undefined,data:any}) => {
            const response = await axiosInstance.put(`/tasks/${id}`,data);
            return response.data;
        }
    });

export const  useDeleteTask = () =>
    useMutation({
        mutationFn: async (id:string) => {
            const response = await axiosInstance.delete(`/tasks/${id}`);
            return response.data;
        }
    })
