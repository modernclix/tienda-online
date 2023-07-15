import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";

const NavBar = () => {
  const context = useContext(ShoppingCartContext);
  const activeStyle = "underline underline-offset-4";

  //Sign out
  const signOut = localStorage.getItem("sign-out")
  const parsedSignOut = JSON.parse(signOut)
  const isUserSignOut = context.signOut || parsedSignOut;

  //account
  const account = localStorage.getItem("account")
  const parsedAccount = JSON.parse(account)
  //has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length===0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length===0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true)
    localStorage.setItem("sign-out", stringifiedSignOut)
    context.setSignOut(true)
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderView = () => {
    if (hasUserAnAccount && !isUserSignOut) {
      return (
        <>
            <li className="text-black/50">{parsedAccount?.email}</li>
            <li>
              <NavLink
                to="/my-orders"
                className={({ isActive }) =>
                isActive ? activeStyle : undefined}>
                  My Orders
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-account"
                className={({ isActive }) =>
                isActive ? activeStyle : undefined}>
                  My Account
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sign-in"
                className={({ isActive }) =>
                isActive ? activeStyle : undefined}
                onClick={()=>handleSignOut()}>
                  Sign out
              </NavLink>
            </li>
            <li
              className="flex justify-between cursor-pointer"
              onClick={context.openCheckoutSideMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                <div className="flex items-center text-center">
                  <div className="m-1 rounded-full bg-lime-300 w-5 h-5 font-medium">
                    {context.cartProducts.length}
                  </div>
                </div>
            </li>      
        </>      
      )
    } else {
      return (
        <li>
          <NavLink
            to="/sign-in"
            className={({isActive})=>isActive?activeStyle:undefined}
            onClick={()=>handleSignOut()}
          >
            Sign in
          </NavLink>
        </li>
      )      
    }
  }

  const renderViewMobile = () => {
    if (hasUserAnAccount && !isUserSignOut) {
      return (
        <>
          <li className="text-black/50 ">{parsedAccount?.email}</li>
          <li className="mt-1">
            <NavLink
              to="/my-orders"
              onClick={toggleMenu}
              className={({ isActive }) =>
              isActive ? activeStyle : undefined}>
                My Orders
              </NavLink>
          </li>
          <li className="mt-1">
            <NavLink
              to="/my-account"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive ? activeStyle : undefined}>
                  My Account
            </NavLink>
          </li>
          <li className="mt-1">
            <NavLink
              to="/sign-in"
              className={({ isActive }) =>
              isActive ? activeStyle : undefined}
              onClick={() => {handleSignOut(); toggleMenu()}}>
                Sign out
            </NavLink>
          </li>
          <li
            className="flex items-center cursor-pointer mt-1"
            onClick={() => {context.openCheckoutSideMenu(); toggleMenu();}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <div className="flex flex-col items-center text-center">
              <div className="m-1 rounded-full bg-lime-300 w-5 h-5 font-medium items-center">
                {context.cartProducts.length}
              </div>
            </div>  
          </li>
        </>
        )
    } else {
      return (
        <li>
          <NavLink
            to="/sign-in"
            className={({isActive})=>isActive?activeStyle:undefined}
            onClick={()=>{handleSignOut();toggleMenu()}}
          >
            Sign in
          </NavLink>
        </li>
      )      
    }
  }
  return (
    <nav className="flex justify-center md:justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light gap-3 bg-white">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to={`${isUserSignOut? "/sign-in" : "/"}`}>
            <img
              src="https://i.imgur.com/VzoEBDJ.png"
              className="w-52"
              alt="LIME Shop"
            />
          </NavLink>
        </li>
        <li className="md:hidden">
          <button
            onClick={toggleMenu}
            className={`${
              isMenuOpen ? "text-gray-800" : ""
            } focus:outline-none`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          {isMenuOpen && (
            <div className="absolute left-0 mt-2 py-2 w-full bg-lime-100 border rounded-lg px-3 border-lime-300 shadow-md">
              <h1 className="text-sm">CATEGORIES</h1>
              <ul className="ml-2 text-base">
                <li>
                  <NavLink
                    to="/"
                    onClick={() => {context.setCategory(); toggleMenu()}}
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined}>
                      All
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/womensclothing"
                    onClick={() => {context.setCategory("women's clothing"); toggleMenu()}}
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined}>
                      Women's clothing
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/mensclothing"
                    onClick={() => {context.setCategory("men's clothing");toggleMenu()}}
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined}>
                      Men's clothing
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/electronics"
                    onClick={() => {context.setCategory("electronics"); toggleMenu()}}
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined}>
                      Electronics
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/jewelery"
                    onClick={() => {context.setCategory("jewelery"); toggleMenu()}}
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined}>
                      Jewelery
                  </NavLink>
                </li>
              </ul>
              <div className="ml-1 mt-4">
                <h1 className="text-sm">PROFILE</h1>
                  <ul className="text-base ml-2">
                  {renderViewMobile()}
                  </ul>
                </div>
              </div>)}
        </li>
        <li className="hidden md:block">
          <NavLink
            to="/"
            onClick={() => context.setCategory()}
            className={({ isActive }) =>
            isActive ? activeStyle : undefined}>
              All
          </NavLink>
        </li>
        <li className="hidden md:block">
          <NavLink
            to="/womensclothing"
            onClick={() => context.setCategory("women's clothing")}
            className={({ isActive }) =>
            isActive ? activeStyle : undefined}>
              Women's clothing
          </NavLink>
        </li>
        <li className="hidden md:block">
          <NavLink
            to="/mensclothing"
            onClick={() => context.setCategory("men's clothing")}
            className={({ isActive }) =>
            isActive ? activeStyle : undefined}>
              Men's clothing
          </NavLink>
        </li>
        <li className="hidden md:block">
          <NavLink
            to="/electronics"
            onClick={() => context.setCategory("electronics")}
            className={({ isActive }) =>
            isActive ? activeStyle : undefined}>
              Electronics
          </NavLink>
        </li>
        <li className="hidden md:block">
          <NavLink
            to="/jewelery"
            onClick={() => context.setCategory("jewelery")}
            className={({ isActive }) =>
            isActive ? activeStyle : undefined}>
              Jewelery
          </NavLink>
        </li>
      </ul>
      <ul className="md:flex items-center gap-3 hidden">
        {renderView()}
      </ul>
    </nav>
      )
    }

export default NavBar;
