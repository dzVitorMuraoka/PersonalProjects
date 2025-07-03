import ProfileCard from "./componentsProfileCard/ProfileCard"
import avatar from "./assets/avatar-img.jpeg"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LoginSimulation from "./componentsLoginSimulation/LoginSimulation"

const App = () => {

  const Home = () => <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

    <ProfileCard
      name="Vitor Muraoka"
      description="Pretenso Full Stack"
      bio="Desenvolvedor da Developz"
      avatar={avatar}
      instagram="https://www.instagram.com/gabriel._.muraoka/"
      twitter="https://twitter.com/wasos19"

    />
  </div>

  return (
    <Router>
      <Routes>
        <Route path="/PersonalProjects/" element={<Home />} />
        <Route path="/PersonalProjects/LoginSimulation" element={<LoginSimulation />} />
      </Routes>

    </Router>
  )
}

export default App

