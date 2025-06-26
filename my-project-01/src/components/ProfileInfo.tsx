type ProfileInfoProps = {
  name: string;
  description: string;
  bio: string;
}
const ProfileInfo = ({name, description, bio} : ProfileInfoProps) => {
  return (
   <>
    <h2 className = "text-x1 font-semibold text-gray-800"> {name}</h2>
    <p className = "text-base font-medium text-gray-500"> {description}</p>
    <p className = "text-sm font-medium text-black"> {bio} </p>
   </>
  )
}

export default ProfileInfo