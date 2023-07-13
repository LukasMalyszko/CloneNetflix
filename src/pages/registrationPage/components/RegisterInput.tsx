interface RegisterInputProps {
  label: string;
  placeholder: string;
}

export const RegisterInput: React.FC<RegisterInputProps> = ({
  label,
  placeholder,
}) => {
  return (
    <div className="register-input">
      <label htmlFor="" className="register-input__label">{label}</label>
      <input type="text" placeholder={placeholder}  className="register-input__input"/>
    </div>
  );
};
