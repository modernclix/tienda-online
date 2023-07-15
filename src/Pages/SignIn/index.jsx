import { useContext, useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import Layout from "../../Components/Layout"


function SignIn() {

  const context = useContext(ShoppingCartContext)
  const [view, setView] = useState("user-info")
  const form = useRef(null)

  //hook navigate
  const navigate = useNavigate();


  //Account
  const account = localStorage.getItem("account")
  const parsedAccount = JSON.parse(account)

  //Has an account

  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length===0:true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length===0:true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

  const handleSignIn = () => {
    const stringifiedSignOut = JSON.stringify(false)
    localStorage.setItem("sign-out", stringifiedSignOut)
    context.setSignOut(false)
    console.log("handleSignIn function called")
    //redirect
    navigate('/')
  }

  const createAnAccount = () => {
    const formData = new FormData(form.current)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password")
    }
    //Create Account
    const stringifiedAccount = JSON.stringify(data)
    localStorage.setItem("account", stringifiedAccount)
    context.setAccount(data)
    //sign in
    handleSignIn()
  }

  const renderSignIn = ()=>{
    return (
      <div className="flex flex-col items-center w-[300px]">
        <ul className="flex flex-col justify-between p-2">
          <li>
            <h3 className="p-2">Email</h3>
            <input type="text" className="bg-slate-300 p-2 rounded-lg" defaultValue={parsedAccount?.email}/>            
          </li>
          <li>
            <h2 className="p-2">Password</h2>
            <input type="password" className="bg-slate-300 p-2 rounded-lg" defaultValue={parsedAccount?.password}/>
            <p className="cursor-pointer font-medium text-right hover:font-bold">Forgot password?</p>            
          </li>
        </ul>
        <div className="flex items-center justify-start w-[200px]">
          <input type="checkbox" />
          <p className="m-2">
            Remember me
          </p>
        </div>
        <button
          className="font-bold cursor-pointer bg-lime-300 p-3 rounded-lg w-[200px] my-3 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
          onClick={() => handleSignIn()}
          disabled={!hasUserAnAccount}
          >
            Sign In
        </button>
        <div className="m-6 font-light flex flex-col items-center w-[300px]">
          <h2>
            New here? Register to buy our amazing products!
          </h2>
          <button
            className="font-bold cursor-pointer border-2  border-lime-300 p-3 rounded-lg w-[200px] my-3 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
            onClick={()=>setView("create-user-info")}
            >
              Register
          </button>
        </div>              
      </div>
    )
  }

  const renderCreateUserInfo = ()  => {
    return (
      <form ref={form} className="flex flex-col gap-4 w-80">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-light text-sm">Your name:</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={parsedAccount?.name}
            placeholder="Name"
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-light text-sm">Your email:</label>
          <input
            type="text"
            id="email"
            name="email"
            defaultValue={parsedAccount?.email}
            placeholder="example@mail.com"
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4 "
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="font-light text-sm">Your password:</label>
          <input
            type="password"
            id="password"
            name="password"
            defaultValue={parsedAccount?.password}
            placeholder="****"
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>

          <button
            className="font-bold cursor-pointer bg-lime-300 p-3 rounded-lg w-full my-3 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
            onClick={() => createAnAccount()}
            to="/"
            >
              Create account
          </button>

      </form>
    )
  }

  const renderView = ()=>view==="create-user-info"?renderCreateUserInfo():renderSignIn()

    return (
      <>
        <Layout>
          <h1>Welcome to LIME shop</h1>
          {renderView()}
        </Layout>
      </>
    )
  }
  
  export default SignIn