import { Layout, Space, Typography } from "antd";
import {
    LoginOutlined,
    LogoutOutlined,
    TeamOutlined,
    UserOutlined,
} from "@ant-design/icons";
import styles from "./index.module.css";
import CustomButton from "../Custom-Button";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/AuthSlice";

const Header = () => {
    const currentUser = useAppSelector((state) => state.auth.user);
    const dispatch = useAppDispatch();

    const onLogoutClick = () => {
        dispatch(logout());
        localStorage.removeItem("token");
    };
    return (
        <Layout.Header className={styles.header}>
            <Space>
                <TeamOutlined className={styles.teamIcon} />
                <Link to="/">
                    <CustomButton type="ghost">
                        <Typography.Title level={1}>
                            Сотрудники
                        </Typography.Title>
                    </CustomButton>
                </Link>
            </Space>
            {currentUser ? (
                <CustomButton
                    type="ghost"
                    icon={<LogoutOutlined />}
                    onClick={onLogoutClick}
                >
                    Выйти
                </CustomButton>
            ) : (
                <Space>
                    <Link to="/register">
                        <CustomButton type="ghost" icon={<UserOutlined />}>
                            Зарегестрироваться
                        </CustomButton>
                    </Link>
                    <Link to="/login">
                        <CustomButton type="ghost" icon={<LoginOutlined />}>
                            Войти
                        </CustomButton>
                    </Link>
                </Space>
            )}
        </Layout.Header>
    );
};

export default Header;
