const OrdersCard = props => {
    const { totalPrice, totalProducts } = props

    return(
        <div className="flex justify-between items-center mb-3 border border-black w-80 p-4 rounded-lg ">
            <div className="flex justify-between w-full">
                <p className="flex flex-col">
                    <span className="font-light">01/02/2023</span>
                    <span className="font-light">{totalProducts} articles</span>
                </p>
                <p className="flex items-center gap-2 ">
                    <span className="font-medium text-2xl">${totalPrice}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                    </svg>
                </p>
            </div>
        </div>
    )
}

export default OrdersCard