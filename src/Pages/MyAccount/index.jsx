import { useState, useContext, useRef } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";

function MyAccount() {
  const context = useContext(ShoppingCartContext);
  const account = localStorage.getItem("account");
  const parsedAccount = JSON.parse(account)
  const form = useRef(null)
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const formData = new FormData(form.current)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password")
    }
    setIsEditing(false);
    const stringifiedAccount = JSON.stringify(data)
    localStorage.setItem("account", stringifiedAccount)
    context.setAccount(data)
    
  };

  return (
    <>
      <Layout>
        <h1>MyAccount</h1>
        <form ref={form} className="flex items-center mt-2">
          <ul className="flex flex-col">
            <li className="flex justify-between mt-2">
              <label htmlFor="name" className="p-2">Your name(s)</label>
              {isEditing ? (
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="bg-lime-100 p-2 rounded-lg"
                  defaultValue={parsedAccount?.name}
                />
              ) : (
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="bg-slate-300 p-2 rounded-lg"
                  readOnly={true}
                  defaultValue={parsedAccount?.name}
                />
              )}
            </li>
            <li className="flex justify-between mt-2">
              <label htmlFor="email" className="p-2">Email</label>
              {isEditing ? (
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="bg-lime-100 p-2 rounded-lg"
                  defaultValue={parsedAccount?.email}
                />
              ) : (
                <input
                  type="text"
                  id="email"
                  name="email"                  
                  className="bg-slate-300 p-2 rounded-lg"
                  readOnly={true}
                  defaultValue={parsedAccount?.email}
                />
              )}
            </li>
            <li className="flex justify-between mt-2">
              <label htmlFor="password" className="p-2">Password</label>
              {isEditing ? (
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="bg-lime-100 p-2 rounded-lg"
                  defaultValue={parsedAccount?.password}
                />
              ) : (
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="bg-slate-300 p-2 rounded-lg"
                  readOnly={true}
                  defaultValue={parsedAccount?.password}
                />
              )}
            </li>
          </ul>
        </form>

        <div className="flex justify-center mt-3">
          {isEditing ? (
            <button
              className="items-center font-bold cursor-pointer bg-lime-300 p-3 rounded-lg w-52 m-2 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
              onClick={handleSave}
            >
              Save
            </button>
          ) : (
            <button
              className="items-center font-bold cursor-pointer bg-lime-300 p-3 rounded-lg w-52 m-2 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
              onClick={handleEdit}
            >
              Edit
            </button>
          )}
        </div>
      </Layout>
    </>
  );
}

export default MyAccount;
