import clsx from "clsx";
import styles from "./styles.module.scss"

export default function ShippingDetails() {
    return (
        <div>
            <h2><span>2</span> Shipping Details</h2>
            <div className={clsx(styles.infoShipping)}>
                <div className={clsx(styles.dataShipping)}>
                    <div>
                        <label for="street">Street Address</label>
                        <input id="street" type="text" />
                    </div>
                    <div>
                        <label for="city">City</label>
                        <input id="city" type="text" />
                    </div>
                </div>
                <div className={clsx(styles.dataShipping)}>
                    <div>
                        <label for="code">Zip Code</label>
                        <input id="code" type="text" />
                    </div>
                    <div>
                        <label for="city">City</label>
                        <select name="city" id="city">
                            <option value= "hanoi">Ha Noi</option>
                            <option value= "HCM">Ho Chi Minh City</option>
                            <option value= "Can Tho">Can Tho</option>
                            <option value= "Hai Phong">Hai Phong</option>
                            <option value= "Nam Dinh">Nam Dinh</option>
                            <option value= "Bac Ninh">Bac Ninh</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
} 