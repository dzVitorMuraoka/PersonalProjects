import { useState } from "react"

const Buttom = () => {
    const [isFollowing, setIsFollowing] = useState(false);

    const handleClick = () =>{
        setIsFollowing(prev => !prev);
    }

  return (
    <button 
    onClick={handleClick}
    className={`mt-5 px-4 py-2 rounded-full transition font-medium"
        ${isFollowing ? "bg-green-500 hover:bg-green-600" : "bg-indigo-500 hover:bg-indigo-600"}
        text-white`
    }> {isFollowing ? "Seguindo" : "Seguir"}


    
    </button>
  )
}

export default Buttom