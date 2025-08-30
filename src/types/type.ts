export interface IRegister {
    username:string,
    email:string,
    password:string
}

export interface ILogin {
    email:string,
    password:string
}

export interface IAuthContextProps {
    token:string | null,
    setToken: (token: string | null) => void,
    loading:boolean
}

export interface ITasks{
    title:string,
    description:string,
    status:string,
    priority:string,
    dueDate:Date
}

export interface ITasksProps{
    taskStatus:string | undefined,
    taskPriority:string | undefined
}