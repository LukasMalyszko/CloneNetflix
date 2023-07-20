import { User } from "../Interfaces";

interface RegisterInputProps {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  value?: string;
  form: User;
  onChange: any;
}

export const RegisterInput: React.FC<RegisterInputProps> = ({
  name,
  label,
  placeholder,
  type,
  value,
  form,
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
      {form[name].errorMessage && (
        <div className="register-input__error-container">
          <div className="register-input__error-img-box">
            <img src="/warning 3.svg" alt="" />
          </div>
          <p className="register-input__error-message">
            {form[name].errorMessage}
          </p>
        </div>
      )}
    </div>
  );
};
