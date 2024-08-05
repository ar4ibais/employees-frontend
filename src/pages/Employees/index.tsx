import { PlusCircleOutlined } from "@ant-design/icons";
import CustomButton from "../../components/Custom-Button";
import { Table } from "antd";
import { useGetAllEmployeesQuery } from "../../redux/services/employees";
import { ColumnsType } from "antd/es/table";
import { Employee } from "../../types";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";

const columns: ColumnsType<Employee> = [
    {
        title: "Имя сотрудника",
        dataIndex: "firstName",
        key: "fisrtName",
    },
    {
        title: "Возраст сотрудника",
        dataIndex: "age",
        key: "age",
    },
    {
        title: "Адрес сотрудника",
        dataIndex: "address",
        key: "address",
    },
];

const Employees = () => {
    const { data, isLoading } = useGetAllEmployeesQuery();
    const currentUser = useAppSelector((state) => state.auth.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (!currentUser) {
            navigate("/login");
        }
    }, [currentUser, navigate]);

    const goToAddUser = () => {
        navigate("/add");
    };
    return (
        <>
            <CustomButton
                type="primary"
                onClick={goToAddUser}
                icon={<PlusCircleOutlined />}
            >
                Добавить
            </CustomButton>
            <Table
                loading={isLoading}
                dataSource={data}
                pagination={false}
                columns={columns}
                rowKey={(record) => record.id}
                onRow={(record) => {
                    return {
                        onClick: () => navigate(`/employees/${record.id}`),
                    };
                }}
            />
        </>
    );
};

export default Employees;
