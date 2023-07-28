import "./LogInputContainer.scss";

interface LogInputContainerProps {
    label: string,
    type: string,
    placeholder: string,
}

export const LogInputContainer: React.FC<LogInputContainerProps> = ( {label, type, placeholder}) => {
  return (
    <div className="log-input-container">
            <label className="log-input-container__label">{label}</label>
            <input className="log-input-container__input" type={type} 
            placeholder={placeholder}/>
        </div>
  )
}
