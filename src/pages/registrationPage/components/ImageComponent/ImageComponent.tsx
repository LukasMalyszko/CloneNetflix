interface ImageProps {
    src: string;
    name: string;
}

export const ImageComponent: React.FC<ImageProps> = ({src, name}) => {
    
  return (
    <div className='image-component'>
        <img src={src} alt={name} />
    </div>
  )
}
