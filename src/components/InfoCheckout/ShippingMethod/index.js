import clsx from "clsx";
import styles from "./styles.module.scss"
import { useContext, useState } from "react"
import { FeeShipContext } from "../../../GlobalVariable/shippingFeeContext"
export default function ShippingMethod() {
    const { fee, setFee } = useContext(FeeShipContext)

    function handleOnClick(e) {
        const isElementClicked = e.target.parentElement.parentElement;
        // isElementClicked.querySelector("input") == null ? isElementClicked.parentElement.querySelector('input').checked = true
        //     : isElementClicked.querySelector('input').checked = true;
        if (isElementClicked.querySelector("input") == null) {
            isElementClicked.parentElement.querySelector('input').checked = true;
            setFee(isElementClicked.parentElement.querySelector('input').value)
        }
        else {
            isElementClicked.querySelector('input').checked = true;
            setFee(isElementClicked.querySelector('input').value)

            
        }
    }

    return (
        <div>
            <h2><span>3</span> Shipping Method</h2>
            <div className={clsx(styles.containerMethod)}>
                <div onClick={handleOnClick} className={clsx(styles.infoMethod)}>
                    <div>
                        <input value="0" type="radio" name="shipping" />
                    </div>
                    <div className={clsx(styles.dataMethod)}>
                        <div className={clsx(styles.styleMethod)}><p><i class="fa-solid fa-bicycle"></i>Free</p><p>$0</p></div>
                        <p>5-7 Days delivery</p>
                    </div>
                </div>
                <div onClick={handleOnClick} className={clsx(styles.infoMethod)}>
                    <div>
                        <input value="10" type="radio" name="shipping" />
                    </div>
                    <div className={clsx(styles.dataMethod)}>
                        <div className={clsx(styles.styleMethod)}><p><i class="fa-solid fa-truck-fast"></i>Standard</p><p>$10</p></div>
                        <p>3-5 Days delivery</p>
                    </div>
                </div>
                <div onClick={handleOnClick} className={clsx(styles.infoMethod)}>
                    <div>
                        <input value="20" type="radio" name="shipping" />
                    </div>
                    <div className={clsx(styles.dataMethod)}>
                        <div className={clsx(styles.styleMethod)}><p><i class="fa-solid fa-plane-departure"></i>Express</p><p>$20</p></div>
                        <p>2-3 Days delivery</p>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}