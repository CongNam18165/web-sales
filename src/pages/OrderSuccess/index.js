import styles from "./styles.module.scss"
import clsx from "clsx";
import img from "../../assets/images/orderSuccess.jpg"
import { useNavigate } from "react-router-dom";
function OrderSuccess() {
    const continuesOrder = useNavigate();
    function handleContinues() {
        continuesOrder("/")
        
    }
    return (
        <div className={clsx(styles.boxOrder)}>
            <div >
                <img src={img} />
                <h1>Your order is complete!</h1>
                <p>You will be receiving a confirmation email with order details.</p>
                <button onClick={handleContinues}><i class="fa-solid fa-chevron-left"></i>Continues Shopping</button>
            </div>
        </div>
    )
}
export default OrderSuccess;