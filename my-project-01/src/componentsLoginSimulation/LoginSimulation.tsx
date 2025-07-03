import BoxInputs from "./BoxInputs"
import ButtonLogin from "./ButtonLogin"
import user from "./data.json"
import { useEffect, useState } from "react"


type User ={
  id: number;
  name: string;
}

const LoginSimulation = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const [, setUser] = useState<User|null>(null);

  useEffect(()=>{
    const savedUser = localStorage.getItem("usuario");
    if(savedUser){
      setUser(JSON.parse(savedUser));
      console.log(`You're logged in, ${savedUser}`);
      
    }
  
  }, [])

  const validateLogin = ()=>{
    const userFound = user.find(user => user.email === email && user.password === password) //'validation'
    console.log(userFound)
    if(userFound){
      setUser(userFound);
      localStorage.setItem("usuario", JSON.stringify(userFound.name));

      setMessage(`Bem-vindo, ${userFound.name}!`);
    } else {
      setMessage("Email ou senha inválidos");
    }

  }
  return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2x1 shadow-lg w-full max-w-md">
        <div className="flex-col">
        <BoxInputs
        email = {email}
        password = {password}
        setEmail={setEmail}
        setPassword={setPassword}
        />
        <div className="mt-4">
            <ButtonLogin
            onClick={validateLogin}
            />
        </div>
         <div className={`block mt-4 text-center font-medium text-sm ${message.includes("Bem-vindo") ? "text-green-700" : "text-red-500"}`} >{message}</div>
      </div>
      </div>
     
    </div>
        
   
  )
}

export default LoginSimulation