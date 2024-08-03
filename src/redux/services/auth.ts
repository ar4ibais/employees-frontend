import { api } from "./api";

export type UserData = {
    [key: string]: string;
}
export type ResponseUserData = UserData & {token: string}

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<ResponseUserData, UserData>({
            query: (body) => ({
                url: '/user/login',
                method: "POST",
                body
            } )
        }),
        register: builder.mutation<ResponseUserData, UserData>({
            query: (body) => ({
                url: '/user/register',
                method: "POST",
                body
            } )
        }),
        current: builder.query<ResponseUserData, void>({
            query: () => ({
                url: '/user/current',
                method: "GET"
            } )
        }),
    })
})

export const {useLoginMutation, useRegisterMutation, useCurrentQuery} = authApi
export const {endpoints: {login, register, current}} = authApi