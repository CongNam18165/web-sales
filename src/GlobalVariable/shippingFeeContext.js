import { createContext, useState } from "react";

const FeeShipContext = createContext();

function ShippingFeeProvider( { children }) {
    const [fee, setFee] = useState(0)
    return (
        <FeeShipContext.Provider value={{fee, setFee}}>
            {children}
        </FeeShipContext.Provider>
    )

}
export { FeeShipContext, ShippingFeeProvider }