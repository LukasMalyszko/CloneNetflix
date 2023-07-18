interface RegisterInputProps {
  label: string;
  placeholder: string;
  type: string;
}

export const RegisterInput: React.FC<RegisterInputProps> = ({
  label,
  placeholder,
  type,
}) => {
  return (
    <div className="register-input">
      <label htmlFor="" className="register-input__label">{label}</label>
      <input type={type} placeholder={placeholder}  className="register-input__input"/>
    </div>
  );
};
