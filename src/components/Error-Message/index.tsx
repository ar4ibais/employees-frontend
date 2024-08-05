import { Alert } from "antd";

const ErrorMessage = ({ message }: { message?: string }) => {
  if (!message) {
    return null;
  }
  return <Alert message={message} type='error' />
};

export default ErrorMessage;
