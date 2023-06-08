import { useState, useEffect } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"

function Home() {
    const [items, setItems] = useState(null)

    useEffect(()=>{
      fetch('https://api.escuelajs.co/api/v1/products')
      .then(response=>response.json())
      .then(data=>setItems(data))
    }, [])

    return (
      <>
        <Layout>
          Home
          <div className="flex justify-center">
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 w-full max-w-screen-lg">
              {
                items?.map(item=>(
                  <Card key={item.id} data={item} />
                ))
              }
            </div>
          </div>
        </Layout>
      </>
    )
  }
  
  export default Home