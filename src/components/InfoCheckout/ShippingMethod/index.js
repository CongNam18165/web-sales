import clsx from "clsx";
import styles from "./styles.module.scss"

export default function ShippingMethod() {
    return (
        <div>
            <h2><span>3</span> Shipping Method</h2>
            <div className={clsx(styles.containerMethod)}>
                <div className={clsx(styles.infoMethod)}>
                    <div>
                        <input type="radio" name="shipping" />
                    </div>
                    <div className={clsx(styles.dataMethod)}>
                        <div className={clsx(styles.styleMethod)}><p><i class="fa-solid fa-bicycle"></i>Free</p><p>$0</p></div>
                        <p>5-7 Days delivery</p>
                    </div>
                </div>
                <div className={clsx(styles.infoMethod)}>
                    <div>
                        <input type="radio" name="shipping" />
                    </div>
                    <div className={clsx(styles.dataMethod)}>
                        <div className={clsx(styles.styleMethod)}><p><i class="fa-solid fa-truck-fast"></i>Standard</p><p>$10</p></div>
                        <p>3-5 Days delivery</p>
                    </div>
                </div>
                <div className={clsx(styles.infoMethod)}>
                    <div>
                        <input type="radio" name="shipping" />
                    </div>
                    <div className={clsx(styles.dataMethod)}>
                        <div className={clsx(styles.styleMethod)}><p><i class="fa-solid fa-plane-departure"></i>Express</p><p>$20</p></div>
                        <p>2-3 Days delivery</p>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    )
}