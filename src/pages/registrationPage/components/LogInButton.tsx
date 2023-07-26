// import React from 'react'
interface ButtonProps {
  image: any;
  text: string;
  className: string;
  onClick?: () => void;
}

export const LogInButton: React.FC<ButtonProps> = ({
  image,
  text,
  className,
  onClick,
}) => {
  return (
    <button className={className} onClick={onClick}>
      <img src={image} alt={image} />
      {text}
    </button>
  );
};
