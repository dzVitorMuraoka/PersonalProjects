type onClickProps ={
  onClick: ()=> void;
}
const ButtonLogin = ({onClick}:onClickProps) => {
  return (
   <>
        <button
        type='submit'
        onClick={onClick}
        className="bg-blue-500 text-white hover:bg-blue-700 transition px-4 py-2 w-full rounded-lg">
            Entrar
        </button>
    </>
  )
}

export default ButtonLogin