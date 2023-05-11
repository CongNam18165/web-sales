import clsx from "clsx"
import styles from "./styles.module.scss"
import Heading from "../Home/Heading"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

function Product() {
        const { id } = useParams();
        const [detailProduct, setDetailProduct] = useState([]);
        const [amount, setAmount] = useState(1);

        useEffect(() => {
                fetch(`https://64560c052e41ccf1691288a4.mockapi.io/products/${id}`)
                        .then(res => res.json())
                        .then(res => setDetailProduct(res))
                //     .then(console.log(detailProduct))

        }, [id])

        const rating = [];
        for(let i =0; i< detailProduct.rate; i++){
rating.push('<i class="fa-solid fa-star"></i>')
}

        const numberSale = ((Number(detailProduct.price) * 80) / 100).toFixed() + '.00';
        const handleAmountMinus = () => {
                if (amount > 1) {
                        setAmount(amount - 1);
                }
        }
        const handleAmountPlus = () => {
                setAmount(amount + 1);
        }
        return (
                <div>
                        <Heading />
                        <div className={clsx(styles.decriptionProduct)}>
                                <div className={clsx(styles.boxImages)}  >
                                        <img src={detailProduct.image} />
                                        {/* <div className={clsx(styles.boxBuy)}>
                                        <p><span>Amount: </span><i class="fa-solid fa-minus"></i>1<i class="fa-solid fa-plus"></i></p>
                                        <p>Add To Cart</p>
                                        <p>Buy Now</p>
                                        </div> */}
                                </div>
                                <div className={clsx(styles.boxDecription)}>
                                        <p>In Stock</p>
                                        <p>{detailProduct.name}</p>
                                        <p><span>Address</span>:  {detailProduct.address}</p>
                                        <ul className={clsx(styles.listStar)}>
                                                {rating.map(() =>
                                                                <li><i class="fa-solid fa-star"></i></li>
                                                        
                                                )}
                                                {/* <li>
                                                        <i class="fa-solid fa-star"></i>
                                                </li>
                                                <li>
                                                        <i class="fa-solid fa-star"></i>
                                                </li>
                                                <li>
                                                        <i class="fa-solid fa-star"></i>
                                                </li>
                                                <li>
                                                        <i class="fa-solid fa-star"></i>
                                                </li>
                                                <li>
                                                        <i class="fa-regular fa-star-half-stroke"></i>
                                                </li> */}
                                        </ul>
                                        <p> Price : ${detailProduct.price} <span>${numberSale}</span></p>
                                        <p><i class="fa-solid fa-circle"></i> <span> Open:</span> <i class="fa-regular fa-clock"></i><span>06:00 - 22:00</span> </p>
                                        <p>{detailProduct.description}</p>
                                        <p>Last update: {detailProduct.createdAt}</p>
                                        <div className={clsx(styles.boxBuy)}>
                                                <h2><span>Amount: </span><i onClick={handleAmountMinus} class="fa-solid fa-minus"></i>{amount}<i onClick={handleAmountPlus} class="fa-solid fa-plus"></i></h2>
                                                <h2>Add To Cart</h2>
                                        </div>
                                        <p>Buy Now</p>
                                </div>
                        </div>
                </div>
        )
}
export default Product