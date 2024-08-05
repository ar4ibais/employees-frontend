import { api } from "./api";

export const EmployeesApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllEmployees: builder.query({
            query: () => ({
                url: "/employees",
                method: "GET",
            }),
        }),
        getEmployee: builder.query({
            query: (id) => ({
                url: `/employees/${id}`,
                method: "GET",
            }),
        }),
        editEmployee: builder.mutation({
            query: (employee) => ({
                url: `/employees/${employee.id}`,
                method: "PATCH",
                body: employee,
            }),
        }),
        removeEmployee: builder.mutation({
            query: (id) => ({
                url: `/employees/${id}`,
                method: "DELETE",
                body: { id },
            }),
        }),
        addEmployee: builder.mutation({
            query: (employee) => ({
                url: `/employees`,
                method: "POST",
                body: {
                    firstName: employee.firstName,
                    lastName: employee.lastName,
                    address: employee.address,
                    age: employee.age,
                },
            }),
        }),
    }),
});

export const {
    useGetAllEmployeesQuery,
    useGetEmployeeQuery,
    useEditEmployeeMutation,
    useAddEmployeeMutation,
    useRemoveEmployeeMutation,
} = EmployeesApi;
export const {
    endpoints: {
        getAllEmployees,
        getEmployee,
        addEmployee,
        removeEmployee,
        editEmployee,
    },
} = EmployeesApi;
