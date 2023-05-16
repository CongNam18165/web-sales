import clsx from "clsx";
import styles from "./styles.module.scss";
import PersonalDetails from "./PersonalDetails";
import ShippingDetails from "./ShippingDetails";
import ShippingMethod from "./ShippingMethod";
import PaymentMethod from "./PaymentMethod";
import OrderSummary from "./OrderSummary"
function InfoCheckout() {
    return (
        <div className={clsx(styles.boxCheckout)}>
            <div className={clsx(styles.boxInfoDetails)}>
                <PersonalDetails />
                <ShippingDetails />
                <ShippingMethod />
                <PaymentMethod />
            </div>
            <div className={clsx(styles.boxOrderSummary)}>
                <OrderSummary />
            </div>
        </div>
    )
}
export default InfoCheckout