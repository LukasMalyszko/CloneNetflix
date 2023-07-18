// import React from 'react'
interface ButtonProps {
    image: any,
    text: string,
    className: string,
    data: any,
    onClick: () => void
}

export const Button: React.FC<ButtonProps> = ({image, text, className, data, onClick}) => {
  return (
    <button className={className}
    data-loader={data}
    onClick={onClick}>
        <div className="text">
          <img src={image} alt={image} />
          {text}
        </div>
        <div className="loader">
            <img src="/animated-loader.svg" />
          </div>
    </button>
  )
}
