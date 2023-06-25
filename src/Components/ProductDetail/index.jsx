import { useContext } from "react"
import { ShoppingCartContext } from '../../Context'

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)
  
  return (
    <aside
        className={`
            ${context.isProductDetailOpen ? 'flex' : 'hidden'}
            flex flex-col fixed right-0 border bg-white border-black rounded-lg w-[350px] h-[calc(100vh-80px)] m-2 top-[72px] overflow-y-scroll
        `}
    >
        <div className="flex justify-between items-center p-6">
            <h2 className="font-medium text-xl">Product detail</h2>
            <div
            className="cursor-pointer"
            onClick={() => context.closeProductDetail()}
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
        <figure className="m-1 px-6">
            <img
                className="w-full h-full rounded-lg"
                src={context.productToShow.images}
                alt={context.productToShow.title}
            />
        </figure>
        <div className="flex flex-col p-6">
            <span className="font-medium text-2xl mb-2">${context.productToShow.price}</span>
            <span className="font-medium text-md">{context.productToShow.title}</span>
            <div className="max-h-32 overflow-y-auto mt-2 mb-4">
                <p className="font-light text-sm">{context.productToShow.description}</p>
            </div>
        </div>
    </aside>
            )
                }

export default ProductDetail
