import Avatar from "./Avatar";
import Buttom from "./Buttom";
import ProfileInfo from "./ProfileInfo";
import SocialLinks from "./SocialLinks";


type ProfileCardProps = {
    name: string
    description: string
    bio: string
    avatar: string
    twitter?:string
    instagram?:string
}
const ProfileCard = ({
    name, 
    description,
    bio,
    avatar,
    twitter,
    instagram
}: ProfileCardProps) => {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-sm text-center">
        <Avatar src = {avatar} alt = {name}/>
        <ProfileInfo name ={name} description={description} bio ={bio}/>
        <SocialLinks instagram = {instagram} twitter = {twitter}/>
        <Buttom />
    </div>
  )
}

export default ProfileCard