import { Card, Form, Row, Space, Typography } from "antd";
import CustomInput from "../../components/Custom-Input";
import PasswordInput from "../../components/Password-Input";
import CustomButton from "../../components/Custom-Button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Row align="middle" justify="center">
      <Card title="Войдите" style={{ width: "30rem" }}>
        <Form onFinish={() => null}>
          <CustomInput name="email" placeholder="Email" type="email" />
          <PasswordInput name="password" placeholder="Пароль" />
          <CustomButton type="primary" htmlType="submit">
            Войти
          </CustomButton>
        </Form>
        <Space direction='vertical' size='large'>
          <Typography.Text>Нет аккаунта? <Link to='/register'>Зарегестрироваться</Link></Typography.Text>
        </Space>
      </Card>
    </Row>
  );
};

export default Login;
