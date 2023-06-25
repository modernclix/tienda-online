import { useContext } from "react"
import { Link } from "react-router-dom"
import { ShoppingCartContext } from '../../Context'
import OrderCard from "../OrderCard"
import { totalPrice } from "../../utils"

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product=>product.id != id)
        context.setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: "02/03/2023",
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }
        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setSearchByTitle(null)
        context.setCategory(null)
    }

    return (
        <aside
            className={`
                ${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'}
                flex flex-col fixed right-0 border bg-white border-black rounded-lg w-[350px] h-[calc(100vh-80px)] m-2 top-[72px] 
            `}
        >
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My Order</h2>
                <div
                className="cursor-pointer"
                onClick={() => context.closeCheckoutSideMenu()}
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
                />
                </svg>
                </div>
            </div>
            <div className="px-6 overflow-y-scroll flex-1">
                {
                    context.cartProducts.map(product => (
                        <OrderCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageUrl={product.images}
                        price={product.price}
                        handleDelete={handleDelete}
                        /> 
                    ))
                }
            </div>
            <div className="px-6">
                <p className="flex justify-between items-center bg-slate-200 rounded-lg p-1">
                    <span className="font-light">Total: </span>
                    <span className="font-medium text-xl">${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to="/my-orders/last" >
                    <button
                        className="font-bold cursor-pointer bg-teal-200 p-3 rounded-lg w-full my-3 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                        onClick={()=>handleCheckout()}>
                        Buy now
                    </button>                
                </Link>
            </div>
        </aside>
                )
                    }

export default CheckoutSideMenu
