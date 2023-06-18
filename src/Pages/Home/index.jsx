import { useState, useEffect } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"

function Home() {
  const [items, setItems] = useState([]) // Inicializamos como un arreglo vacío

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  return (
      <Layout>
        Home
        <div className="flex justify-center">
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 w-full max-w-screen-lg">
            {
              items?.map(item => (
                <Card key={item.id} data={item}/> // Utiliza la propiedad adecuada para la clave del elemento
              ))
            }
          </div>
        </div>
        <ProductDetail/>
      </Layout>
  )
}

export default Home
