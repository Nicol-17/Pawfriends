type ImageProps = {
    src : string;
    alt : string;
    className? : string;
    hidden? : boolean;
};

const Image: React.FC<ImageProps> = ({
    src,
    alt,
    className = '',
    hidden = true,

}) => {
    return (
        <img 
        src={src} 
        alt={alt}
        className={className}
        aria-hidden={hidden} 
        />
    );
};

export default Image;