const ProductDetail = ()=> {
    return (
        <aside className="flex flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]">
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Product detail</h2>
                <div className="cursor-pointer">X</div>
            </div>
        </aside>
    )
}

export default ProductDetail