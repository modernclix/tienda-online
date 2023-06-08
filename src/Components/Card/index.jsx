const Card = (data)=> {
    return (
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
            <figure className="relative mb-2 mg-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-1 p-1">{data.data.category.name}</span>
                <img src={data.data.images[0]} alt={data.data.title} className="object-cover h-full w-full rounded-lg"/>
                <button className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full text-lg m-2 p-1">+</button>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light m-2">{data.data.title}</span>
                <span className="text-lg font-medium">${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card