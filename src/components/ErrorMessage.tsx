interface IErrorMessageProps {
  children: string;
}

const ErrorMessage = ({ children }: IErrorMessageProps) => {
  return <p className="error-message text-xs text-error">{children}</p>;
};

export default ErrorMessage;
