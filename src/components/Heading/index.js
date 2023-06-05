
import clsx from 'clsx'
import styles from "./styles.module.scss"
import { Link } from "react-router-dom"
import { useContext, useEffect, useRef, useState } from "react"
import { ProductsArrContext } from "../../GlobalVariable/ProductsArrContext"
import empty from "../../assets/images/giohangtrong.png"

function Heading() {
    const { ProductsArray, setProductsArray } = useContext(ProductsArrContext)
    const [isHover, setIsHover] = useState()

    function handleHover() {
        setIsHover(true)
    }
    function handleOutHover() {
        setIsHover(false)
    }


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
                <li onMouseOut={handleOutHover} onMouseOver={handleHover} className={clsx(styles.amountProducts)}>
                    <Link to="/cart" ><i class="fa-solid fa-cart-shopping"></i></Link>
                    <div className={ProductsArray.length > 0 ? "block" : "none"} >
                        <p className={clsx(styles.numberAmount)}>{ProductsArray.length}</p>
                    </div>
                    {(isHover && ProductsArray.length <= 0)  && (
                        <div className={clsx(styles.emptybox)}>
                            <img src={empty} />
                            <p>Shopping cart is empty</p>
                        </div>)
                    }
                </li>
                <li  >
                    <i class="fa-solid fa-user"></i>
                </li>
            </ul>
        </div>
    )
}
export default Heading