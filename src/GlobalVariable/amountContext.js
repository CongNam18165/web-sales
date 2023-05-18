import { createContext, useState } from "react";

const AmountContext = createContext();

function AmountProvider( { children }) {
    const [amount, setAmount] = useState(JSON.parse(localStorage.getItem('ProductsData')).length)
    return (
        <AmountContext.Provider value={{amount, setAmount}}>
            {children}
        </AmountContext.Provider>
    )

}
export { AmountContext, AmountProvider }