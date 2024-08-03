import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ConfigProvider, theme } from "antd";
import { store } from "./redux/store.ts";
import Login from "./pages/Login/index.tsx";
import Register from "./pages/Register/index.tsx";
import Employees from "./pages/Employees/index.tsx";
import Layout from "./components/Layout/index.tsx";
import Auth from "./features/auth/Auth.tsx";
import "./index.css";

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
            </Routes>
          </Layout>
        </Auth>
      </ConfigProvider>
    </Provider>
  </BrowserRouter>
);
