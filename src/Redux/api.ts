import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { apiUrl } from '../utils/constants'
import { LoginFormValues } from '../pages/auth/types'
import { RootState } from './store'
import { Course, Response, Stats, User, UserRequest } from '../utils/types'

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
    tagTypes: ['Courses'],
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

        // STATS
        getStats: builder.query<Stats, any>({
            query: () => ({
                url: "/admin/user-stats",
                method: "GET",
            }),
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
        getCourses: builder.query<Course[], any>({
            query: (args) => ({
                url: "/admin/courses",
                method: "GET",
                params: args
            }),

        }),
        // Course
        getCourse: builder.query<Course, string>({
            query: (id) => ({
                url: `/admin/courses/${id}`,
                method: "GET",
            }),
            providesTags: ['Courses']
        }),
        updateCourse: builder.mutation<Course, { id: string, course: Omit<Course, '_id' | '__v'> }>({
            query: ({ id, course }) => ({
                url: `/admin/courses/${id}`,
                method: "PUT",
                body: course
            }),
            invalidatesTags: ['Courses']
        }),
        deleteCourse: builder.mutation<Course, string>({
            query: (id) => ({
                url: `/admin/courses/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Courses']
        }),
        // Finances
        getEarnings: builder.query<Course[], any>({
            query: (args) => ({
                url: "/admin/earnings",
                method: "GET",
                params: args
            }),
        }),

        // Author Requests
        getAuthorRequests: builder.query<Response, string>({
            query: (authorId) => ({
                url: `/requests/author/${authorId}`,
                method: "GET",
            }),
        }),

        // User Requests
        getRequestList: builder.query<{ statuses: UserRequest[] }, string>({
            query: (type) => ({
                url: `/requests/${type === "community" ? "" : type === "provider" ? "pro-trader" : "academy"}`,
                method: "GET",
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

    // STATS ENDPOINTS
    useGetStatsQuery,

    // USERS ENDPOINTS
    useGetUsersQuery,
    useGetAUserQuery,

    // PROVIDERS ENDPOINTS
    useGetProvidersQuery,

    // COURSES ENDPOINTS
    useGetCoursesQuery,
    useGetCourseQuery,
    useUpdateCourseMutation,
    useDeleteCourseMutation,

    // Author Requests
    useGetAuthorRequestsQuery,

    // User Requests
    useGetRequestListQuery,

    useGetEarningsQuery



} = api