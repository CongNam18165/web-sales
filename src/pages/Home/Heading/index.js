
import clsx from 'clsx'
import styles from "./styles.module.scss"
import {Link } from "react-router-dom"
import { useNavigate} from "react-router-dom"
function Heading() {
    const history = useNavigate();
    const handleCart = () => {
        history("/cart");

    }
    return (
        <div className={clsx(styles.container,'flex')}>
            <ul className = {clsx(styles.listBar,'flex')}>
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
            <ul className = {clsx(styles.listMore,'flex')}>
                <li className = "flex">
                <p>Top-up</p>
                <i class="fa-solid fa-circle-dollar-to-slot"></i>
                </li>
                <li>
                <a onClick={handleCart}><i class="fa-solid fa-cart-shopping"></i></a>
                </li>
                <li >
                <i class="fa-solid fa-user"></i>
                </li>
            </ul>
        </div>
    )
}
export default Heading