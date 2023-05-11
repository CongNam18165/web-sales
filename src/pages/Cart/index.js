import styles from "./styles.module.scss"
import clsx from "clsx"
import Heading from "../Home/Heading/index"
import { useEffect, useState } from "react"

function Cart() {
    const [cart, setCart] = useState([])
    useEffect(() => {
        const storeProducts = localStorage.getItem('ProductsData')

        const parsedStoreProducts = JSON.parse(storeProducts);

        setCart(parsedStoreProducts)
    }, [])
function handleOnClickTrash(id){
   const newCart = cart.filter(item => item.id !== id )
    setCart(newCart)
    localStorage.setItem('ProductsData', JSON.stringify(newCart));
}
    // const [quantity, setQuantity] = useState(1);
    // function handleQuantityMinus(e) {
    //     if (quantity > 1)
    //         setQuantity(quantity - 1)
    // }
    // function handleQuantityPlus() {

    //     setQuantity(quantity + 1)
    // }
    return (
        <>
            <Heading />
            <h1 className={clsx(styles.title)}>Shopping Cart</h1>
            <div className={clsx(styles.containerGods)}>
                <div className={clsx(styles.boxGods)}>
                    <div><h2>Item</h2></div>
                    <div><h2>Quantity</h2></div>
                    <div><h2>Cost</h2></div>
                    <div><h2></h2></div>
                </div>
                {

                    cart === null ? <h1>Empty</h1> :
                        cart.map(function (parsedStoreProduct) {
                            return (
                                <>
                                    <div key={parsedStoreProduct.price} className={clsx(styles.boxGods)}>
                                        <div className={styles.boxProduct}>
                                            <img className={styles.imgProduct} src={parsedStoreProduct.img ? parsedStoreProduct.img : ''} />
                                            <h2>{parsedStoreProduct.name ? parsedStoreProduct.name : ''}</h2>
                                        </div>
                                        <div className={clsx(styles.amount)}>
                                            <h2>1</h2>
                                            <div className={clsx(styles.minusPlus)}>
                                                <i  class="fa-solid fa-minus"></i>
                                                <i  class="fa-solid fa-plus"></i>
                                            </div>
                                        </div>
                                        <div><h2>{parsedStoreProduct.price ? parsedStoreProduct.price : ''}</h2></div>
                                        <div onClick= {() => handleOnClickTrash(parsedStoreProduct.id)} className={styles.trash}><h2><i class="fa-regular fa-trash-can"></i></h2></div>
                                    </div>
                                </>
                            )
                        })
                }
            </div>
        </>
    )
}
export default Cart