import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ConfigProvider, theme } from "antd";
import { store } from "./redux/store.ts";
import Login from "./pages/Login/index.tsx";
import Register from "./pages/Register/index.tsx";
import Employees from "./pages/Employees/index.tsx";
import AddEmployee from "./pages/Add-Employee/index.tsx";
import Layout from "./components/Layout/index.tsx";
import Auth from "./redux/features/auth/Auth.tsx";
import "./index.css";
import Status from "./pages/Status/index.tsx";
import Employee from "./pages/Employee/index.tsx";
import EditEmployee from "./pages/Edit-Employee/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <Provider store={store}>
            <ConfigProvider
                theme={{
                    algorithm: theme.darkAlgorithm,
                }}
            >
                <Auth>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Employees />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/add" element={<AddEmployee />} />
                            <Route
                                path="/status/:status"
                                element={<Status />}
                            />
                            <Route
                                path="/employees/:id"
                                element={<Employee />}
                            />
                            <Route
                                path="/employee/edit/:id"
                                element={<EditEmployee />}
                            />
                        </Routes>
                    </Layout>
                </Auth>
            </ConfigProvider>
        </Provider>
    </BrowserRouter>
);
