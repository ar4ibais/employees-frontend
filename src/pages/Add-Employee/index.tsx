import { Row } from "antd";
import EmployeeForm from "../../components/Employee-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import {
    useAddEmployeeMutation,
    useGetAllEmployeesQuery,
} from "../../redux/services/employees";
import { Employee } from "../../types";
import { isErrorWithMessage } from "../../utils/is-error-with-message";

const AddEmployee = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const currentUser = useAppSelector((state) => state.auth.user);
    const [addEmployee] = useAddEmployeeMutation();
    const { refetch } = useGetAllEmployeesQuery();

    const handleAddEmployee = async (data: Employee) => {
        try {
            console.log(data);
            await addEmployee(data).unwrap();
            refetch();
            navigate("/status/created");
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
        if (!currentUser) {
            navigate("/login");
        }
    }, [currentUser, navigate]);
    return (
        <Row align="middle" justify="center">
            <EmployeeForm
                onFinish={handleAddEmployee}
                title="Добавить сутрудника"
                btnText="Добавить"
                error={error}
            />
        </Row>
    );
};

export default AddEmployee;
