import { User } from "../Interfaces";

interface RegisterInputProps {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  value?: string;
  form: User;
  errorMessage?: string;
  onChange: any;
}

export const RegisterInput: React.FC<RegisterInputProps> = ({
  name,
  label,
  placeholder,
  type,
  value,
  form,
  errorMessage,
  onChange,
}) => {
  return (
    <div className="register-input">
      <label htmlFor="" className="register-input__label">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={`register-input__input ${form[name].errorMessage && "error"}`}
        value={value}
        onChange={onChange}
      />
      {errorMessage && (
        <div className="register-input__error-container">
          <div className="register-input__error-img-box">
            <img src="/warning 3.svg" alt="" />
          </div>
          <p className="register-input__error-message">
            {errorMessage}
          </p>
        </div>
      )}
    </div>
  );
};
