
import clsx from 'clsx'
import styles from "./styles.module.scss"
import { Link } from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import {AmountContext} from "../../../GlobalVariable/amountContext"
function Heading() {
const {amount, setAmount} = useContext(AmountContext)
console.log(amount)
    return (
        <div className={clsx(styles.container, 'flex')}>
            <ul className={clsx(styles.listBar, 'flex')}>
                <li>
                    <i class="fa-solid fa-bars-staggered"></i>
                </li>
                <li>
                    <p>Categories</p>
                </li>
                <li>
                    <i class="fa-solid fa-chevron-down"></i>
                </li>
            </ul>
            <ul className={clsx(styles.listMore, 'flex')}>
                <li className="flex">
                    <p>Top-up</p>
                    <i class="fa-solid fa-circle-dollar-to-slot"></i>
                </li>
                <li className={clsx(styles.amountProducts)}>
                    <Link to="/cart"><i class="fa-solid fa-cart-shopping"></i></Link>
                    <div><p className={clsx(styles.numberAmount)}>{amount}</p></div>
                </li>
                <li >
                    <i class="fa-solid fa-user"></i>
                </li>
            </ul>
        </div>
    )
}
export default Heading