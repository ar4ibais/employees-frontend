import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
    useGetAllEmployeesQuery,
    useGetEmployeeQuery,
    useRemoveEmployeeMutation,
} from "../../redux/services/employees";
import { useAppSelector } from "../../redux/hooks";
import { Descriptions, Divider, Modal, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import CustomButton from "../../components/Custom-Button";
import ErrorMessage from "../../components/Error-Message";
import { isErrorWithMessage } from "../../utils/is-error-with-message";

const Employee = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [error, setError] = useState("");
    const [open, setOpen] = useState(false);
    const { data, isLoading } = useGetEmployeeQuery(id);
    const [removeEmployee] = useRemoveEmployeeMutation();
    const currentUser = useAppSelector((state) => state.auth.user);
    const { refetch } = useGetAllEmployeesQuery();

    if (isLoading) {
        return <span>Загрузка...</span>;
    }

    const showModal = () => {
        setOpen(true);
    };

    const hideModal = () => {
        setOpen(false);
    };

    const handleDeleteUser = async () => {
        hideModal();

        try {
            await removeEmployee(data.id).unwrap();
            refetch();
            navigate("/status/deleted");
        } catch (error) {
            const maybeError = isErrorWithMessage(error);

            if (maybeError) {
                setError(error.data.message);
            } else {
                setError("Неизвестная ошибка");
            }
        }
    };

    return (
        <>
            <Descriptions title="Информация о сотруднике" bordered>
                <Descriptions.Item
                    label="Имя"
                    span={3}
                >{`${data.firstName} ${data.lastName}`}</Descriptions.Item>
                <Descriptions.Item label="Возраст" span={3}>
                    {data.age}
                </Descriptions.Item>
                <Descriptions.Item label="Адрес" span={3}>
                    {data.address}
                </Descriptions.Item>
            </Descriptions>
            {currentUser?.id === data.userId && (
                <>
                    <Divider orientation="left">Действия</Divider>
                    <Space>
                        <Link to={`/employee/edit/${data.id}`}>
                            <CustomButton
                                shape="round"
                                type="default"
                                icon={<EditOutlined />}
                            >
                                Редактировать
                            </CustomButton>
                        </Link>
                        <CustomButton
                            shape="round"
                            danger
                            onClick={showModal}
                            icon={<DeleteOutlined />}
                        >
                            Удалить
                        </CustomButton>
                    </Space>
                </>
            )}
            <ErrorMessage message={error} />
            <Modal
                title="Подтвердите удаление"
                open={open}
                onOk={handleDeleteUser}
                onCancel={hideModal}
                okText="Подтвердить"
                cancelText="Отменить"
            >
                Вы действительно хотите удалить сотрудника?
            </Modal>
        </>
    );
};

export default Employee;
