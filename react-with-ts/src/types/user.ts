export interface BaseUserI {
    firstName: string;
    lastName: string;
    age: number;
}

export interface UserI extends BaseUserI {
    id: string;
}
