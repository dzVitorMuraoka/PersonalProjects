type AvatarProps = {
    src: string;
    alt: string;
}

const Avatar = ({ src, alt }: AvatarProps) => {
    return (
        <div className="bg-gray-700 w-24 h-24 overflow-hidden border-2 rounded-full mx-auto mb-4 border-indigo-400">
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover " />
        </div>
    )
}

export default Avatar;


