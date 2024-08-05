import { Card, Form, Row, Space, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../../components/Custom-Button";
import CustomInput from "../../components/Custom-Input";
import PasswordInput from "../../components/Password-Input";
import { useAppSelector } from "../../redux/hooks";
import { useEffect, useState } from "react";
import { UserData, useRegisterMutation } from "../../redux/services/auth";
import ErrorMessage from "../../components/Error-Message";
import { isErrorWithMessage } from "../../utils/is-error-with-message";

const Register = () => {
    const navigate = useNavigate();
    const currentUser = useAppSelector((state) => state.auth.user);
    const [error, setError] = useState("");
    const [registerUser] = useRegisterMutation();

    const register = async (data: UserData) => {
        try {
            await registerUser(data).unwrap();
            navigate("/");
        } catch (error) {
            const maybeError = isErrorWithMessage(error);

            if (maybeError) {
                setError(error.data.message);
            } else {
                setError("Неизвестная ошибка");
            }
        }
    };

    useEffect(() => {
        if (currentUser) {
            navigate("/");
        }
    }, [currentUser, navigate]);
    return (
        <Row align="middle" justify="center">
            <Card title="Зарагестрируйтесь" style={{ width: "30rem" }}>
                <Form onFinish={register}>
                    <CustomInput name="name" placeholder="Имя" />
                    <CustomInput
                        name="email"
                        placeholder="Email"
                        type="email"
                    />
                    <PasswordInput name="password" placeholder="Пароль" />
                    <PasswordInput
                        name="confirmPassword"
                        placeholder="Повторите пароль"
                    />
                    <CustomButton type="primary" htmlType="submit">
                        Зарегестрироваться
                    </CustomButton>
                </Form>
                <Space direction="vertical" size="large">
                    <Typography.Text>
                        Уже есть аккаунт? <Link to="/login">Войдите</Link>
                    </Typography.Text>
                    <ErrorMessage message={error} />
                </Space>
            </Card>
        </Row>
    );
};

export default Register;
