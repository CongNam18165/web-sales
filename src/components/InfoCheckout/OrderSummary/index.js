import clsx from "clsx";
import styles from "./styles.module.scss"
import { useState, useEffect, useContext } from "react"
import { FeeShipContext } from "../../../GlobalVariable/shippingFeeContext";
import { ProductsArrContext } from "../../../GlobalVariable/ProductsArrContext";
import { Link } from "react-router-dom"

export default function OrderSummary() {

    const [totalCost, setTotalCost] = useState()
    const { fee, setFee } = useContext(FeeShipContext)
    const { ProductsArray, setProductsArray } = useContext(ProductsArrContext)

    useEffect(() => {
        const total = ProductsArray.reduce((accumentlator, currentValue) => (accumentlator + currentValue.quantity * currentValue.price), 0)
        setTotalCost(total);
    }, [ProductsArray])

    function handleTrash(trashId) {
        const newProducts = ProductsArray.filter(product => product.id !== trashId)
        setProductsArray(newProducts);
        localStorage.setItem('ProductsData', JSON.stringify(newProducts));
    }

    const discount = (parseInt(totalCost) * 15) / 100;
    const Total = (parseInt(totalCost) + parseInt(fee) - parseInt(discount) + (parseInt(totalCost) * 0.07)).toFixed(2);

    function handleOrder(e) {
        if (ProductsArray.length <= 0) {
            e.preventDefault();
            alert('No items to buy. Please add item to cart')
        }
    }
    return (
        <div className={clsx(styles.boxOrder)}>
            <h1>Order Summary</h1>
            {
                ProductsArray.map(product => (
                    <div className={clsx(styles.boxInfo)} key={product.id}>
                        <div className={clsx(styles.boxSmallInfo)}>
                            <img src={product.img} />
                            <div className={clsx(styles.productInfo)}>
                                <p>{product.name}</p>
                                <p>${product.price}</p>
                                <p>Amount: {product.quantity}</p>
                            </div >
                        </div>
                        <p onClick={() => { handleTrash(product.id) }} className={clsx(styles.trash)}><i class="fa-regular fa-trash-can"></i></p>
                    </div>
                ))
            }
            <hr />
            <div className={clsx(styles.boxPay)}>
                <div><p>Subtotal</p><p>${totalCost}.00</p></div>
                <div><p>Shipping</p><p>${fee}</p></div>
                <div><p>Discount(15%)</p><p>${discount}</p></div>
                <div><p>Tax</p><p>7%</p></div>
                <div className={clsx(styles.discount)}>
                    <input placeholder="Discount Code" />
                    <button>Apply</button>
                </div>
            </div>
            <hr />
            <div className={clsx(styles.totalCost)}><p>Total</p><p>${Total}</p></div>
            <Link onClick={handleOrder} to="/orderSuccess" className={clsx(styles.btnOrder)}><button>Order Now</button></Link>
        </div>
    )
}