import styles from "./styles.module.scss";
import clsx from "clsx";
import Heading from "../../components/Heading"
import { useContext, useEffect, useState } from "react"
import CartItem from "../../components/CartItem"
import { Link } from "react-router-dom"
import { ProductsArrContext } from "../../GlobalVariable/ProductsArrContext";
function Cart() {
    const { ProductsArray, setProductsArray } = useContext(ProductsArrContext)

    function handleOnClickTrash(id) {
        let newCart = ProductsArray.filter(item => item.id !== id)
        setProductsArray(newCart)
        localStorage.setItem('ProductsData', JSON.stringify(newCart));
    }
    function handleQuantityMinus(parsedStoreProduct) {
        let newCart = ProductsArray.map(cartItem => {
            if (cartItem.id === parsedStoreProduct.id) {
                if (cartItem.quantity > 0) {
                    cartItem.quantity--;
                }
            };
            return cartItem;
        })
        newCart = newCart.filter(item => item.quantity > 0);
        localStorage.setItem('ProductsData', JSON.stringify(newCart));
        setProductsArray(newCart)
    }

    function handleQuantityPlus(parsedStoreProduct) {
        let newCart = ProductsArray.map(cartItem => {
            if (cartItem.id === parsedStoreProduct.id) cartItem.quantity++;
            return cartItem;
        })
        localStorage.setItem("ProductsData", JSON.stringify(newCart))
        setProductsArray(newCart);
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
                    ProductsArray === null ? <h1>Empty</h1> :
                        ProductsArray.map((parsedStoreProduct) => (
                            <CartItem key={parsedStoreProduct.id} cartItem={parsedStoreProduct} onPlus={handleQuantityPlus} onMinus={handleQuantityMinus} onDelete={handleOnClickTrash} />
                        )
                        )
                }
            </div>
            <div className={clsx(styles.buttonCheckout)}>
                {
                    ProductsArray.length != 0 ?
                        <Link to="/checkOut"> <button>CheckOut</button></Link> : ''
                }
            </div>
        </>
    )
}
export default Cart