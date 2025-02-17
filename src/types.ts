export type ErrorWithMessage = {
    status: number;
    data: {
        message: string;
    }
}

export type Employee = {
    id: string;
    firstName: string;
    lastName: string;
    age: string;
    address: string;
    userId: string
}