import styles from "./styles.module.scss";
import clsx from "clsx";
import {Link } from "react-router-dom";

export default function ProductItem( {productItem , handleOnClick }) {
    return(
    <div className={clsx(styles.product)}>
        <Link className={clsx(styles.linkProduct)} to={`/product/${productItem.id}`}>
            <img className={clsx(styles.image)} src={productItem.image} alt='anh minh hoa' />
        </Link>
        <h2 className={clsx(styles.nameProduct)}>{productItem.name}</h2>
        <p className={clsx(styles.price)}>Price: ${productItem.price}</p>
        <p>{productItem.description}</p>
        <h3 onClick={() => handleOnClick(productItem)} ><i class="fa-solid fa-cart-plus"></i>ADD TO CART</h3>
    </div>
    )
}