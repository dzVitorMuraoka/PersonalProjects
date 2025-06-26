import ProfileCard from "./components/ProfileCard"
import avatar from "./assets/AvatarImg.jpeg"

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <ProfileCard
      name = "Vitor Muraoka"
      description = "Pretenso Full Stack"
      bio = "Desenvolvedor da Developz"
      avatar = {avatar}
      instagram="https://www.instagram.com/gabriel._.muraoka/"
      twitter = "https://twitter.com/wasos19"
      
      />
      
      </div>
  )
}

export default App