import { useContext } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"

function Home() {

  const context = useContext(ShoppingCartContext)
  
  const renderView = ()  => {
      if (context.filteredItems?.length>0) {
        return (
          context.filteredItems?.map(item => (
            <Card key={item.id} data={item}/> // Utiliza la propiedad adecuada para la clave del elemento
          ))      
        )  
      }
      else {
        return (
          <div className="flex justify-center">
            <p className="text-center">No Matches</p>
          </div>
        )
      }
  }

  return (
      <Layout>
        <div className="flex relative justify-center w-80 items-center mb-4">
            <h1 className="font-medium text-xl">
            Exclusive Products
            </h1>
        </div>
        <input
        type="text"
        placeholder="Search products"
        className="rounded-lg  p-4 my-4 bg-slate-300"
        onChange={(event)=> context.setSearchByTitle(event.target.value)}
        />
        <div className="flex justify-center">
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 w-full max-w-screen-lg">
            { renderView() }
          </div>
        </div>
        <ProductDetail/>
      </Layout>
  )
}

export default Home
