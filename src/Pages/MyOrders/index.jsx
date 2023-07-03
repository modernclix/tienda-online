import { useContext } from "react"
import { Link } from "react-router-dom"
import { ShoppingCartContext } from '../../Context'
import Layout from "../../Components/Layout"
import OrdersCard from "../../Components/OrdersCard"

function MyOrders() {
  const context = useContext(ShoppingCartContext)

  return (
    <>
      <Layout>
        <div className="flex relative justify-center w-80 items-center mb-4">
          <h1 className="font-medium text-xl">
            My Orders
          </h1>
        </div>
        {context.order.length === 0 ? ( // Verifica si el array está vacío
          <div className="flex justify-center">
            <p className="text-gray-500">No orders registered</p> {/* Muestra el mensaje */}
          </div>
        ) : (
          // Muestra la lista de pedidos si hay algún pedido registrado
          context.order.map((order, index) => (
            <Link key={index} to={`/my-orders/${index}`} >
              <OrdersCard
                totalPrice={order.totalPrice}
                totalProducts={order.totalProducts}
              />            
            </Link>
          ))
        )}
      </Layout>
    </>
  )
}

export default MyOrders
