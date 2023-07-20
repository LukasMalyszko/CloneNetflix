// import React from 'react'
interface ButtonProps {
  image: any;
  text: string;
  className: string;
  
}

export const Button: React.FC<ButtonProps> = ({
  image,
  text,
  className,
}) => {
  return (
    <button
    className={className} >
        <img src={image} alt={image} />
        {text}
      
    </button>
  );
};
