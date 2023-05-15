import clsx from "clsx";
import styles from "./styles.module.scss";

export default function CartItem({ cartItem, onPlus, onMinus, onDelete }) {
    return (
        <div className={clsx(styles.boxGods)}>
            <div className={styles.boxProduct}>
                <img className={styles.imgProduct} src={cartItem.img ? cartItem.img : ''} />
                <h2>{cartItem.name ? cartItem.name : ''}</h2>
            </div>
            <div className={clsx(styles.amount)}>
                <h2>{cartItem.quantity}</h2>
                <div className={clsx(styles.minusPlus)}>
                    <i onClick={() => onMinus(cartItem)} class="fa-solid fa-minus"></i>
                    <i onClick={() => onPlus(cartItem)} class="fa-solid fa-plus"></i>
                </div>
            </div>
            <div><h2>{cartItem.price ? '$' + cartItem.price *cartItem.quantity  : ''}</h2></div>
            <div onClick={() => onDelete(cartItem.id)} className={styles.trash}><h2><i class="fa-regular fa-trash-can"></i></h2></div>
        </div>
    )
} 