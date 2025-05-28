type ImageProps = {
    src : string;
    alt : string;
    className? : string;
    hidden? : boolean;
    style? : React.CSSProperties;
};

const Image: React.FC<ImageProps> = ({
    src,
    alt,
    className = '',
    hidden = true,
    style,

}) => {
    return (
        <img 
        style={style}
        src={src} 
        alt={alt}
        className={className}
        aria-hidden={hidden} 
        />
    );
};

export default Image;