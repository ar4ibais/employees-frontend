import { Employee } from "../../types";
import { Card, Space, Form } from "antd";
import CustomButton from "../Custom-Button";
import CustomInput from "../Custom-Input";
import ErrorMessage from "../Error-Message";

type Props<T> = {
    onFinish: (value: T) => void;
    btnText: string;
    title: string;
    error?: string;
    employee?: T;
};

const EmployeeForm = ({
    onFinish,
    title,
    btnText,
    error,
    employee,
}: Props<Employee>) => {
    return (
        <Card title={title} style={{ width: "30rem" }}>
            <Form
                name="add-employee"
                onFinish={onFinish}
                initialValues={employee}
            >
                <CustomInput type="text" name="firstName" placeholder="Имя" />
                <CustomInput name="lastName" placeholder="Фамилия" />
                <CustomInput type="number" name="age" placeholder="Возраст" />
                <CustomInput name="address" placeholder="Адрес" />
                <Space direction="vertical" size="large">
                    <ErrorMessage message={error} />
                    <CustomButton htmlType="submit">{btnText}</CustomButton>
                </Space>
            </Form>
        </Card>
    );
};

export default EmployeeForm;
