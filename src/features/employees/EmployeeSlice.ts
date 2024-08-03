import { createSlice } from "@reduxjs/toolkit";
import { Employee } from "../../types";
import { EmployeesApi } from "../../redux/services/employees";

interface InitialState {
    employees: Employee[] | null
}

const initialState: InitialState = {
    employees: null
}

const slice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        logout: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(EmployeesApi.endpoints.getAllEmployees.matchFulfilled, (state, action) => {
                state.employees = action.payload
            })
    }
})

export default slice.reducer