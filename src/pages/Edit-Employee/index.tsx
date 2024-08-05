import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    useGetEmployeeQuery,
    useEditEmployeeMutation,
} from "../../redux/services/employees";
import { Row } from "antd";
import EmployeeForm from "../../components/Employee-form";
import { Employee } from "../../types";
import { isErrorWithMessage } from "../../utils/is-error-with-message";

const EditEmployee = () => {
    const navigate = useNavigate();
    const params = useParams<{ id: string }>();
    const [error, setError] = useState("");
    const { data, isLoading } = useGetEmployeeQuery(params.id || "");
    const [editEmployee] = useEditEmployeeMutation();

    const handleEditUser = async (employee: Employee) => {
        try {
            const editedEmployee = {
                ...data,
                ...employee,
            };

            await editEmployee(editedEmployee).unwrap();
            navigate("/status/updated");
        } catch (error) {
            const maybeError = isErrorWithMessage(error);

            if (maybeError) {
                setError(error.data.message);
            } else {
                setError("Неизвестная ошибка");
            }
        }
    };

    if (isLoading) {
        return <span>Загрузка</span>;
    }
    return (
        <Row align="middle" justify="center">
            <EmployeeForm
                onFinish={handleEditUser}
                title="Редактировать сотрудника"
                employee={data}
                btnText="Редактировать"
                error={error}
            />
        </Row>
    );
};

export default EditEmployee;
