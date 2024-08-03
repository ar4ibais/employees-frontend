import { Card, Form, Row, Space, Typography } from "antd";
import CustomInput from "../../components/Custom-Input";
import PasswordInput from "../../components/Password-Input";
import CustomButton from "../../components/Custom-Button";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation, UserData } from "../../redux/services/auth";
import { isErrorWithMessage } from "../../utils/is-error-with-message";
import { useState } from "react";
import ErrorMessage from "../../components/Error-Message";

const Login = () => {
  const navigate = useNavigate()
  const [loginUser, loginUserResult] = useLoginMutation()
  const [err, setErr] = useState('')

  const login = async (data: UserData) => {
    try {
      await loginUser(data).unwrap()
      navigate('/')
    } catch (error) {
      const maybeError = isErrorWithMessage(error)

      if (maybeError) {
        setErr(error.data.message)
      } else {
        setErr('Неизвестная ошибка')
      }
    }
  }
  return (
    <Row align="middle" justify="center">
      <Card title="Войдите" style={{ width: "30rem" }}>
        <Form onFinish={login}>
          <CustomInput name="email" placeholder="Email" type="email" />
          <PasswordInput name="password" placeholder="Пароль" />
          <CustomButton type="primary" htmlType="submit">
            Войти
          </CustomButton>
        </Form>
        <Space direction='vertical' size='large'>
          <Typography.Text>Нет аккаунта? <Link to='/register'>Зарегестрироваться</Link></Typography.Text>
          <ErrorMessage message={err} />
        </Space>
      </Card>
    </Row>
  );
};

export default Login;
