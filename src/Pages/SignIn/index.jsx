import Layout from "../../Components/Layout"

function SignIn() {
    return (
      <>
        <Layout>
        <h1>Sign In</h1>
        <ul className="flex flex-col justify-between p-2">
          <li>
            <h3 className="p-2">Email</h3>
            <input type="text" className="bg-slate-300 p-2 rounded-lg"></input>            
          </li>
          <li>
            <h2 className="p-2">Password</h2>
            <input type="password" className="bg-slate-300 p-2 rounded-lg"></input>
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
            >
            Sign In
        </button>
        <div className="m-6 font-light flex flex-col items-center w-[300px]">
          <h2>
            New here? Register to buy our amazing products!
          </h2>
          <button
              className="font-bold cursor-pointer border-2  border-lime-300 p-3 rounded-lg w-[200px] my-3 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
            >
            Register
          </button>
        </div>

        </Layout>
      </>
    )
  }
  
  export default SignIn