import clsx from "clsx";
import styles from "./styles.module.scss"
import paypal from "../../../assets/images/paypal.jpg"
import visa from "../../../assets/images/visa.jpg"
import masterCard from "../../../assets/images/Mastercard.png"
export default function PaymentMethod() {
    return (
        <div>
            <h2><span>4</span> Payment Method</h2>
        <div className={clsx(styles.containerMethod)}>
        <div className={clsx(styles.infoMethod)}>
            <div>
                <input type="radio" name="payment" />
            </div>
            <div className={clsx(styles.dataMethod)}>
                <div className={clsx(styles.styleMethod)}><p>Paypal</p><img src={paypal}/></div>
                <p>**** **** ****123</p>
            </div>
        </div>
        <div className={clsx(styles.infoMethod)}>
            <div>
                <input type="radio" name="payment" />
            </div>
            <div className={clsx(styles.dataMethod)}>
                <div className={clsx(styles.styleMethod)}><p>MasterCard</p><img src={masterCard}/></div>
                <p>**** **** ****456</p>
            </div>
        </div>
        <div className={clsx(styles.infoMethod)}>
            <div>
                <input type="radio" name="payment" />
            </div>
            <div className={clsx(styles.dataMethod)}>
                <div className={clsx(styles.styleMethod)}><p>Visa</p><img src={visa}/></div>
                <p>**** **** ****789</p>
            </div>
        </div>
    </div>
    </div>
    )
}