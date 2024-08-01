import { Card, Form, Row, Space, Typography } from "antd"
import { Link } from "react-router-dom"
import CustomButton from "../../components/Custom-Button"
import CustomInput from "../../components/Custom-Input"
import PasswordInput from "../../components/Password-Input"

const Register = () => {
  return (
    <Row align="middle" justify="center">
      <Card title="Зарагестрируйтесь" style={{ width: "30rem" }}>
        <Form onFinish={() => null}>
          <CustomInput name="name" placeholder="Имя" />
          <CustomInput name="email" placeholder="Email" type="email" />
          <PasswordInput name="password" placeholder="Пароль" />
          <PasswordInput name="confirmPassword" placeholder="Повторите пароль" />
          <CustomButton type="primary" htmlType="submit">
            Зарегестрироваться
          </CustomButton>
        </Form>
        <Space direction='vertical' size='large'>
          <Typography.Text>Уже есть аккаунт? <Link to='/login'>Войдите</Link></Typography.Text>
        </Space>
      </Card>
    </Row>
  )
}

export default Register