import styles from "./styles.module.scss"
import Heading from "../Home/Heading"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"

function Product( props){
    const { id } = useParams();
    const [detailProduct , setDetailProduct] = useState();
useEffect(() => {
    fetch(`https://64560c052e41ccf1691288a4.mockapi.io/products/:${id}`)
    .then(res => res.json())
    .then(res => setDetailProduct(res))
},[detailProduct])

    return(
        <div>
<Heading />
<h2>day la cho de viet san pham{id}</h2>
        </div>
)
    }
export default Product