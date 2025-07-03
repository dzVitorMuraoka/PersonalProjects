import { GrFormView } from "react-icons/gr";
import { GrFormViewHide } from "react-icons/gr";
import { IoMdMail } from "react-icons/io";
import { useState } from "react";
type LoginForm = {
  email: string;
  password: string;
  setEmail: (valeu: string) => void;
  setPassword: (value: string) => void;
}

const BoxInputs = ({ email, password, setEmail, setPassword }: LoginForm) => {

  const [status, Alt] = useState(false)
  function setShowing() {
    Alt(prev => !prev)
  }
  return (
    <>
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <div className="flex items-center">
            <input
              type="email"
              value={email}
              placeholder="exemplo@email.com"
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"></input>
            <span className="px-2"><IoMdMail/></span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Senha</label>
          <div className="flex items-center">
            <input
              type={status ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
            <button
              type="button"
              onClick={setShowing}
              className="px-2">{status ? <GrFormViewHide /> : <GrFormView />}  </button>
          </div>

        </div>

      </form>
    </>


  );

}

export default BoxInputs