import { createContext, useState } from "react";

const ProductsArrContext = createContext();

function ProductsArrProvider( { children }) {
    const [ProductsArray, setProductsArray] = useState(JSON.parse(localStorage.getItem('ProductsData'))||[])
    return (
        <ProductsArrContext.Provider value={{ProductsArray, setProductsArray}}>
            {children}
        </ProductsArrContext.Provider>
    )

}
export { ProductsArrContext, ProductsArrProvider }