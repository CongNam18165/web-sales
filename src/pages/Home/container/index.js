import { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import clsx from "clsx"
import { Link, useNavigate } from "react-router-dom"

function Container() {

    const [products, setproducts] = useState([])
    useEffect(() => {
        fetch("https://64560c052e41ccf1691288a4.mockapi.io/products")
            .then(res => res.json())
            .then(res => setproducts(res))
      
    }, [])
    // const id = [];
    const history = useNavigate();
    function handleOnClickProduct(id) {
        history(`/product/${id}`)
    }
    const data = JSON.parse(localStorage.getItem("ProductsData")) || [];
function handleOnClickCart(arrs){
    data.push(
        {
            name :  arrs[0],
            img : arrs[1],
            price : arrs[2],
            id: arrs[3]
        })
        localStorage.setItem('ProductsData', JSON.stringify(data));    
    }
    return (
        <>
            <div className={clsx(styles.container)}>
                {products.map(function (product) {
                    return (
                        <div className={clsx(styles.product)} key={product.id}>
                            {/* <Link className={clsx(styles.linkProduct)} to = {`/product/${product.id}`}> */}
                            <img onClick={() => handleOnClickProduct(product.id)} className={clsx(styles.image)} src={product.image} alt='anh minh hoa' />
                            {/* </Link> */}
                            <h2 className={clsx(styles.nameProduct)}>{product.name}</h2>
                            <p className={clsx(styles.price)}>Price: ${product.price}</p>
                            <p>{product.description}</p>
                            {/* <Link to = {`/product/${product.id}`}><i class="fa-solid fa-cart-plus"></i>ADD TO CART</Link> */}
                            <a onClick={() => handleOnClickCart([product.name, product.image, product.price,product.id])} ><i class="fa-solid fa-cart-plus"></i>ADD TO CART</a>
                        </div>
                    )
                })
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