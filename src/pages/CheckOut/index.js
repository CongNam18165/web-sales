import styles from "./styles.module.scss"
import clsx from "clsx"
import Heading from "../../components/Heading"
import InfoCheckout from "../../components/InfoCheckout"

function CheckOut() {

    return (
        <>
            <Heading />
            <div className={clsx(styles.container)}>
            <h1>Checkout</h1>
                <InfoCheckout />    
            </div>
        </>
    )


}
export default CheckOut