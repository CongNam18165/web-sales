import { useContext, useState, useEffect } from 'react'
import styles from './styles.module.scss'
import clsx from "clsx"
import ProductItem from "../../../components/ProductItem"
import { AmountContext } from '../../../GlobalVariable/amountContext'

function Container() {

    const [products, setproducts] = useState([])
    useEffect(() => {
        fetch("https://64560c052e41ccf1691288a4.mockapi.io/products")
            .then(res => res.json())
            .then(res => setproducts(res))

    }, [])
    const { amount, setAmount } = useContext(AmountContext)

    function handleOnClickCart(product) {
        const datas = JSON.parse(localStorage.getItem("ProductsData")) || [];
        datas.map((data) => {
            if (data.id === product.id) {
                data.quantity++;
                localStorage.setItem('ProductsData', JSON.stringify(datas));
                setAmount(datas.length);
            }

        })
        if (datas.every(data => data.id !== product.id) || datas.length === 0) {
            datas.push(
                {
                    name: product.name,
                    img: product.image,
                    price: product.price,
                    id: product.id,
                    quantity: product.quantity,
                })
                setAmount(datas.length);
                
            localStorage.setItem('ProductsData', JSON.stringify(datas));
        }
    }
    return (
        <>
            <div className={clsx(styles.container)}>
                {products.map((product) => (
                    <ProductItem key={product.id} productItem={product} handleOnClick={handleOnClickCart} />
                ))
                }
            </div>
            <div>
                <ul className={clsx(styles.numberPages, "flex")}>
                    <li><i class="fa-solid fa-chevron-left"></i></li>
                    <li><i class="fa-solid fa-1"></i></li>
                    <li><i class="fa-solid fa-2"></i></li>
                    <li><i class="fa-solid fa-3"></i></li>
                    <li><i class="fa-solid fa-4"></i></li>
                    <li><i class="fa-solid fa-ellipsis"></i></li>
                    <li><i class="fa-solid fa-7"></i></li>
                    <li><i class="fa-solid fa-chevron-right"></i></li>

                </ul>

            </div>
        </>
    )
}

export default Container