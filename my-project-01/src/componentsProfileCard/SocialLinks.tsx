import { FaInstagram, FaTwitter } from "react-icons/fa";

type SocialLinksProps = {
    instagram?:string;
    twitter? : string;
}

const SocialLinks = ({instagram, twitter}: SocialLinksProps) => {
  return (
    <div className = "flex justify-center gap-4 mt-4 text-x1 text-gray-600">
        {instagram && (
            <a href={instagram} 
            target= "_blank" 
            rel = "noopener noreferrer" 
            className = "hover: text-fuchsia-500">
            <FaInstagram/></a>
        )}
        {twitter && (
            <a href= {twitter} target = "_blank" rel = "noopener noreferrer" className = "hover: text-sky-500">
            <FaTwitter/></a>
        )}

    </div>
    
  )
}

export default SocialLinks