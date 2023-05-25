import clsx from "clsx";
import styles from "./styles.module.scss"
import { useEffect, useState } from "react";
export default function ShippingDetails() {
    const [nations, setNations] = useState([])
    useEffect(() => {
        fetch("https://64560c052e41ccf1691288a4.mockapi.io/nation")
            .then(res => res.json())
            .then(res => setNations(res))

    }, [])

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
                        <label for="city">Country</label>
                        <select name="city" id="city">
                            {
                                nations.map((nation) => (
                                    <option key={nation.id} value={nation.country}>{nation.country}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
} 