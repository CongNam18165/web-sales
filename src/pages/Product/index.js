import clsx from "clsx"
import styles from "./styles.module.scss"
import Heading from "../../components/Heading"
import { useParams,useNavigate } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import { ProductsArrContext } from "../../GlobalVariable/ProductsArrContext"
function Product() {
        const { id } = useParams();
        const [detailProduct, setDetailProduct] = useState([]);
        const [amount, setAmount] = useState(1);
        const { ProductsArray, setProductsArray } = useContext(ProductsArrContext)
        useEffect(() => {
                fetch(`https://64560c052e41ccf1691288a4.mockapi.io/products/${id}`)
                        .then(res => res.json())
                        .then(res => setDetailProduct(res))
        }, [id])

        const rating = [];
        for (let i = 0; i < detailProduct.rate; i++) {
                rating.push('<i class="fa-solid fa-star"></i>')
        }

        const numberSale = ((Number(detailProduct.price) * 120) / 100).toFixed() + '.00';
        const handleAmountMinus = () => {
                if (amount > 1) {
                        setAmount(amount - 1);
                }
        }
        const handleAmountPlus = () => {
                setAmount(amount + 1);
        }
        function handleAddProduct(product) {
                const datas = JSON.parse(localStorage.getItem("ProductsData")) || [];
                datas.map((data) => {
                        if (data.id === product.id) {
                                if (amount !== 1) {
                                        data.quantity += amount;
                                } else {
                                        data.quantity++;
                                }
                                localStorage.setItem('ProductsData', JSON.stringify(datas));
                                setProductsArray(datas)
                        }
                })
                if (datas.every(data => data.id !== product.id) || datas.length === 0) {
                        datas.push(
                                {
                                        name: product.name,
                                        img: product.image,
                                        price: product.price,
                                        id: product.id,
                                        quantity: amount,
                                })
                        localStorage.setItem('ProductsData', JSON.stringify(datas));
                        setProductsArray(datas)
                }
        }
        const checkout = useNavigate();
        function handleBuyNow(product) {
                checkout('/checkOut');
                handleAddProduct(product);
        }
        return (
                <div>
                        <Heading />
                        <div className={clsx(styles.decriptionProduct)}>
                                <div className={clsx(styles.boxImages)}  >
                                        <img src={detailProduct.image} />
                                </div>
                                <div className={clsx(styles.boxDecription)}>
                                        <p>In Stock</p>
                                        <p>{detailProduct.name}</p>
                                        <p><span>Address</span>:  {detailProduct.address}</p>
                                        <ul className={clsx(styles.listStar)}>
                                                {rating.map((id) =>
                                                        <li key={id}><i class="fa-solid fa-star"></i></li>

                                                )}
                                        </ul>
                                        <p> Price : ${detailProduct.price} <span>${numberSale}</span></p>
                                        <p><i class="fa-solid fa-circle"></i> <span> Open:</span> <i class="fa-regular fa-clock"></i><span>06:00 - 22:00</span> </p>
                                        <p>{detailProduct.description}</p>
                                        <p>Last update: {detailProduct.createdAt}</p>
                                        <div className={clsx(styles.boxBuy)}>
                                                <h2><span>Amount: </span><i onClick={handleAmountMinus} class="fa-solid fa-minus"></i>{amount}<i onClick={handleAmountPlus} class="fa-solid fa-plus"></i></h2>
                                                <h2 onClick={() => { handleAddProduct(detailProduct) }}>Add To Cart</h2>
                                        </div>
                                        <p onClick={()=>handleBuyNow(detailProduct)}>Buy Now</p>
                                </div>
                        </div>
                </div>
        )
}
export default Product