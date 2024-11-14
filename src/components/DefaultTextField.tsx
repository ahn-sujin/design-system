import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import IconButton from "./IconButton";

interface IDefaultTextFieldProps {
  id: string;
  value: string;
  placeholder: string;
  errorMessage: string;
  iconPath: string;
  iconAlt: string;
  isError: boolean;
  onIconClick: React.MouseEventHandler<HTMLButtonElement>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const DefaultTextField = ({
  id,
  value,
  placeholder,
  errorMessage,
  iconPath,
  iconAlt,
  isError,
  onIconClick,
  onChange,
}: IDefaultTextFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const borderColor = !value ? "border-mono200" : "border-primary";
  const borderFocusColor = isFocused ? "border-secondary" : borderColor;

  return (
    <div className="default-text-field relative">
      <div
        className={`text-primary border-b ${borderFocusColor}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <input
          className="outline-none text-sm"
          type="text"
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {!!value && (
          <IconButton iconPath={iconPath} alt={iconAlt} onClick={onIconClick} />
        )}
      </div>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

export default DefaultTextField;
