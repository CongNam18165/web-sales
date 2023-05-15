import styles from "./styles.module.scss";
import clsx from "clsx";
import Heading from "../Home/Heading/index"
import { useEffect, useState } from "react"
import CartItem from "../../components/CartItem"

function Cart() {

    const [cart, setCart] = useState([])
    useEffect(() => {
        const storeProducts = localStorage.getItem('ProductsData')

        const parsedStoreProducts = JSON.parse(storeProducts);

        setCart(parsedStoreProducts)
    }, [])

    function handleOnClickTrash(id) {
        let newCart = cart.filter(item => item.id !== id)
        setCart(newCart)
        localStorage.setItem('ProductsData', JSON.stringify(newCart));
    }
    function handleQuantityMinus(parsedStoreProduct) {
        let newCart = cart.map(cartItem => {
            if (cartItem.id === parsedStoreProduct.id) {
                if (cartItem.quantity > 0) {
                    cartItem.quantity--;
                }
            };
            return cartItem;
        })
        newCart = newCart.filter(item => item.quantity > 0);
        localStorage.setItem('ProductsData', JSON.stringify(newCart));
        setCart(newCart);
    }

    function handleQuantityPlus(parsedStoreProduct) {
        let newCart = cart.map(cartItem => {
            if (cartItem.id === parsedStoreProduct.id) cartItem.quantity++;
            return cartItem;
        })
        localStorage.setItem("ProductsData", JSON.stringify(newCart))
        setCart(newCart);
    }
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
                        cart.map((parsedStoreProduct) => (
                            <CartItem key={parsedStoreProduct.id} cartItem={parsedStoreProduct} onPlus={handleQuantityPlus} onMinus={handleQuantityMinus} onDelete={handleOnClickTrash} />
                        )
                        )
                }
            </div>
        </>
    )
}
export default Cart