type AvatarProps = {
    src: string;
    alt: string;
}

const Avatar = ({ src, alt }: AvatarProps) => {
    return (
        <img
        src = {src}
        alt = {alt}
        className= "w-24 h-24 rounded-full mx-auto mb-4 border-indigo-500"
        />
            
       
    )
}

export default Avatar