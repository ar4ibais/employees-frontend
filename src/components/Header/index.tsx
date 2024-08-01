import { Layout, Space, Typography } from "antd";
import { LoginOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import styles from "./index.module.css";
import CustomButton from "../Custom-Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Layout.Header className={styles.header}>
      <Space>
        <TeamOutlined className={styles.teamIcon} />
        <Link to='/'>
          <CustomButton type="ghost">
            <Typography.Title level={1}>Сотрудники</Typography.Title>
          </CustomButton>
        </Link>
      </Space>
      <Space>
        <Link to='/register'>
          <CustomButton type="ghost" icon={<UserOutlined />}>
            Зарегестрироваться
          </CustomButton>
        </Link>
        <Link to='/login'>
          <CustomButton type="ghost" icon={<LoginOutlined />}>
            Войти
          </CustomButton>
        </Link>
      </Space>
    </Layout.Header>
  );
};

export default Header;
