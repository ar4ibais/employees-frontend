import { Form, Input } from "antd"

const CustomInput = ({name, placeholder, type = 'text'}: {name: string, placeholder: string, type?: string}) => {
  return (
    <Form.Item name={name} shouldUpdate rules={[{required: true, message: "Обязательное поле"}]}>
        <Input placeholder={placeholder} type={type} size="large" />
    </Form.Item>
  )
}

export default CustomInput