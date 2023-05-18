import clsx from "clsx";
import styles from "./styles.module.scss"
import { useState, useEffect } from "react"

export default function OrderSummary() {
    const [products, setProducts] = useState([])
    const [totalCost, setTotalCost] = useState()
    useEffect(() => {
        const storeProducts = localStorage.getItem('ProductsData');
        const parsedStoreProducts = JSON.parse(storeProducts);
        setProducts(parsedStoreProducts);
    }, [])
    useEffect(() => {
        const total = products.reduce((accumentlator, currentValue) => (accumentlator + currentValue.quantity * currentValue.price), 0)
        setTotalCost(total);

    }, [totalCost])
    return (
        <div className={clsx(styles.boxOrder)}>
            <h1>Order Summary</h1>
            {
                products.map(product => (
                    <div className={clsx(styles.boxInfo)} key={product.id}>
                        <div className={clsx(styles.boxSmallInfo)}>
                        <img src={product.img} />
                        <div className={clsx(styles.productInfo)}>
                            <p>{product.name}</p>
                            <p>${product.price}</p>
                            <p>Amount: {product.quantity}</p>
                        </div >
                        </div>
                        <p className={clsx(styles.trash)}><i class="fa-regular fa-trash-can"></i></p>
                    </div>
                ))
            }
            <hr />
            <div className={clsx(styles.boxPay)}>
                <div><p>Subtotal</p><p>${totalCost}.00</p></div>
                <div><p>Shipping</p><p>10</p></div>
                <div><p>Discount(15%)</p><p>10</p></div>
                <div><p>Tax</p><p>7%</p></div>
                <div className={clsx(styles.discount)}>
                    <input placeholder="Discount Code" />
                    <button>Apply</button>
                </div>
            </div>
            <hr/>
            <div className={clsx(styles.totalCost)}><p>Total</p><p>$20</p></div>
            <div className={clsx(styles.btnOrder)}><button>Order Now</button></div>
        </div>
    )
}