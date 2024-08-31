import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { apiUrl } from '../utils/constants'
import { LoginFormValues } from '../pages/auth/types'
import { RootState } from './store'

// Define a service using a base URL and expected endpoints
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: apiUrl,
        prepareHeaders: async (headers, { getState }) => {
            const state = getState() as RootState;
            const token = state.user?.token
            console.log(token);
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        // Auth
        register: builder.mutation<any, LoginFormValues>({
            query: (args) => ({
                url: "/admin-auth/register",
                method: "POST",
                body: args,
            })
        }),
        login: builder.mutation<any, LoginFormValues>({
            query: (args) => ({
                url: "/admin-auth/login",
                method: "POST",
                body: args,
            })
        }),
        forgotPassword: builder.mutation<any, Omit<LoginFormValues, 'password'>>({
            query: (args) => ({
                url: "/admin-auth/forgot-password",
                method: "POST",
                body: args,
            })
        }),
        resetPassword: builder.mutation<any, LoginFormValues & { otp: string }>({
            query: (args) => ({
                url: "/admin-auth/reset-password",
                method: "POST",
                body: args,
            })
        }),
        resendOtp: builder.mutation<any, Omit<LoginFormValues, 'password'>>({
            query: (args) => ({
                url: "/admin-auth/resend-otp",
                method: "POST",
                body: args,
            })
        }),


        // Users
        getUsers: builder.query<User[], any>({
            query: (args) => ({
                url: "/admin/users",
                method: "GET",
                params: args
            }),
        }),
        // User
        getAUser: builder.query<User, string>({
            query: (userId) => ({
                url: `/admin/users/${userId}`,
                method: "GET",

            }),
        }),
        // Providers
        getProviders: builder.query<User[], any>({
            query: (args) => ({
                url: "/admin/providers",
                method: "GET",
                params: args
            }),
        }),
        // Courses
        getCourses: builder.query<User[], any>({
            query: (args) => ({
                url: "/admin/courses",
                method: "GET",
                params: args
            }),
        }),
        // Finances
        getEarnings: builder.query<User[], any>({
            query: (args) => ({
                url: "/admin/earnings",
                method: "GET",
                params: args
            }),
        }),
    }),
})


export const {
    // AUTH ENDPOINTS
    useLoginMutation,
    useRegisterMutation,
    useForgotPasswordMutation,
    useResendOtpMutation,
    useResetPasswordMutation,

    // USERS ENDPOINTS
    useGetUsersQuery,
    useGetAUserQuery,

    // PROVIDERS ENDPOINTS
    useGetProvidersQuery,
    useGetCoursesQuery,
    useGetEarningsQuery

} = api