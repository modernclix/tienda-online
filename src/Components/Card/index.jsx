import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const Card = (data)=> {
    const context = useContext(ShoppingCartContext)
    const showProduct = (productDetail)=> {
        context.openProductDetail() 
        context.setProductToShow(productDetail)
    }
    const addProductToCart = (event, productData) => {
        event.stopPropagation()
        context.setCartProducts([...context.cartProducts, productData])
        context.openCheckoutSideMenu()
        context.closeProductDetail()
    }

    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product =>product.id === id).length>0

        if (isInCart) {
            return (
                <div className="absolute top-0 right-0 flex justify-center items-center bg-lime-300 w-6 h-6 rounded-full text-lg m-2 animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            )
        }
        else {
            return (
                <button className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full text-lg m-2 p-1 hover:animate-bounce"
                onClick={(event)=>
                    addProductToCart(event, data.data)
                }>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
            )                
        }
    }

    return (
        <div 
        className="bg-white relative cursor-pointer w-56 h-60 rounded-lg"
        onClick ={ () => showProduct(data.data)}>   
            <figure className="relative mb-2 mg-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-1 p-1">{data.data.category.name}</span>
                <img src={data.data.images} alt={data.data.title} className="object-cover h-full w-full rounded-lg"/>
                {renderIcon(data.data.id)}
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light m-2">{data.data.title}</span>
                <span className="text-lg font-medium">${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card