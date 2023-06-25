import { createContext, useState, useEffect } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children})=> {
  
    //ventanta de product detail
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)
    
    //contenido de product detail
    const [productToShow, setProductToShow] = useState({})

    // productos del carrito
    const [cartProducts, setCartProducts] = useState([])
    // checkout side menu
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)    

    //Shopping cart * Order
    const [order, setOrder] = useState([])

// Get products
    const [items, setItems] = useState([]) // Inicializamos como un arreglo vacío

// Search Products    
    const [searchByTitle, setSearchByTitle] = useState(null)
    const [filteredItems, setFilteredItems] = useState([])
    const [category, setCategory] = useState(null)

    useEffect(() => {
      fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
    }, [])
  
    const searchItemsFilter = (items, searchByTitle)=> {
        return items?.filter(item =>item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filterCategory = (items, category)=> {
        return items?.filter(item =>item.category.name.toLowerCase().includes(category.toLowerCase()))
    }

    const filterBy = (searchType, items, searchByTitle, category) => {
        if (searchType === 'BY_TITLE') {
          return searchItemsFilter(items, searchByTitle)
        }
    
        if (searchType === 'BY_CATEGORY') {
          return filterCategory(items, category)
        }
    
        if (searchType === 'BY_TITLE_AND_CATEGORY') {
          return filterCategory(items, category).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
    
        if (!searchType) {
          return items
        }
      }




      useEffect(() => {
        if (searchByTitle && category) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, category))
        if (searchByTitle && !category) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, category))
        if (!searchByTitle && category) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, category))
        if (!searchByTitle && !category) setFilteredItems(filterBy(null, items, searchByTitle, category))
      }, [items, searchByTitle, category])


    return (
        <ShoppingCartContext.Provider value={{
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            setFilteredItems,
            category,
            setCategory
        }}>
        {children}
        </ShoppingCartContext.Provider>
    )
}