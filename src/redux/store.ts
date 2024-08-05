import { configureStore } from "@reduxjs/toolkit";
import auth from "./features/auth/AuthSlice";
import employees from "./features/employees/EmployeeSlice";
import { api } from "./services/api";
import { listenerMiddleware } from "../middleware/auth";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        auth,
        employees,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(api.middleware)
            .prepend(listenerMiddleware.middleware);
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
