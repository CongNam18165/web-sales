import styles from "./styles.module.scss"
import clsx from "clsx"
import Heading from "../Home/Heading/index"
function Cart() {
    return (
        <>
            <Heading />
            <h1 className={clsx(styles.title)}>Shopping Cart</h1>
            <div className={clsx(styles.containerGods)}>
                <div>
                    <div className={clsx(styles.boxGods)}>
                        <div><h2>Item</h2></div>
                        <div><h2>Quantity</h2></div>
                        <div><h2>Totalcost</h2></div>
                        <div><h2></h2></div>
                    </div>
                    <div className={clsx(styles.boxGods)}>
                        <div>
                            <img src="" />
                            <h2></h2>
                        </div>
                        <div><h2></h2></div>
                        <div><h2></h2></div>
                        <div><h2><i class="fa-regular fa-trash-can"></i></h2></div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </>
    )
}
export default Cart