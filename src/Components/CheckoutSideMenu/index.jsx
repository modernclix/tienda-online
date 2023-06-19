import { useContext } from "react"
import { ShoppingCartContext } from '../../Context'
import OrderCard from "../OrderCard"

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product=>product.id != id)
        context.setCartProducts(filteredProducts)
    }

    return (
        <aside
            className={`
                ${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'}
                flex flex-col fixed right-0 border bg-white border-black rounded-lg w-[350px] h-[calc(100vh-80px)] m-2 top-[72px] 
            `}
        >
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My order</h2>
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
            <div className="px-6 overflow-y-scroll">
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
        </aside>
                )
                    }

export default CheckoutSideMenu
