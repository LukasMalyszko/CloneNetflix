import "./LogInputContainer.scss";

interface LogInputContainerProps {
  label: string;
  type: string;
  placeholder: string;
  onChange: (value: string) => void;
}

export const LogInputContainer: React.FC<LogInputContainerProps> = ({
  label,
  type,
  placeholder,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onChange(value);
  }

  return (
    <div className="log-input-container">
      <label className="log-input-container__label">{label}</label>
      <input
        className="log-input-container__input"
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};
