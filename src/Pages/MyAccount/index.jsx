import React, { useState } from "react";
import Layout from "../../Components/Layout";

function MyAccount() {
  const [name, setName] = useState("Juan José Mayotte");
  const [email, setEmail] = useState("juanjo@example.com");
  const [phone, setPhone] = useState("3456 3546");
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Aquí puedes realizar acciones adicionales, como guardar los valores editados en una base de datos.
  };

  return (
    <>
      <Layout>
        <h1>MyAccount</h1>
        <ul className="flex flex-col justify-between p-2">
          <li>
            <h3 className="p-2">Name(s) and Surname(s)</h3>
            {isEditing ? (
              <input
                type="text"
                className="bg-lime-100 p-2 rounded-lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            ) : (
              <input
                type="text"
                className="bg-slate-300 p-2 rounded-lg"
                readOnly={true}
                value={name}
              />
            )}
          </li>
          <li>
            <h3 className="p-2">Email</h3>
            {isEditing ? (
              <input
                type="text"
                className="bg-lime-100 p-2 rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            ) : (
              <input
                type="text"
                className="bg-slate-300 p-2 rounded-lg"
                readOnly={true}
                value={email}
              />
            )}
          </li>
          <li>
            <h3 className="p-2">Phone</h3>
            {isEditing ? (
              <input
                type="text"
                className="bg-lime-100 p-2 rounded-lg"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            ) : (
              <input
                type="text"
                className="bg-slate-300 p-2 rounded-lg"
                readOnly={true}
                value={phone}
              />
            )}
          </li>
        </ul>
        <div className="flex justify-center">
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
