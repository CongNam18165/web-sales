import { useContext, useState, useEffect } from 'react'
import styles from './styles.module.scss'
import clsx from "clsx"
import ProductItem from "../../../components/ProductItem"
import { ProductsArrContext } from '../../../GlobalVariable/ProductsArrContext'

function Container() {

    const [products, setproducts] = useState([])
    useEffect(() => {
        fetch("https://64560c052e41ccf1691288a4.mockapi.io/products")
            .then(res => res.json())
            .then(res => setproducts(res))

    }, [])
    const { ProductsArray, setProductsArray } = useContext(ProductsArrContext)

    function handleOnClickCart(product) {
        const datas = JSON.parse(localStorage.getItem("ProductsData")) || [];
        datas.map((data) => {
            if (data.id === product.id) {
                data.quantity++;
                localStorage.setItem('ProductsData', JSON.stringify(datas));
                setProductsArray(datas);
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
            setProductsArray(datas);
            localStorage.setItem('ProductsData', JSON.stringify(datas));
        }
    }

    const [currentPage, setCurrentPage] = useState(1);
    const [currentProducts, setCurrentProducts] = useState([]);
    const itemsPerPage = 12;
    const totalPages = Math.ceil(products.length / itemsPerPage);
    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const slicedProducts = products.slice(startIndex, endIndex);
        setCurrentProducts(slicedProducts);
    }, [currentPage, products, itemsPerPage]);

    function handlePageChange(pageNumber) {
        setCurrentPage(pageNumber)
    }

    function handleNextPage() {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }
    function handlePrePage() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    return (
        <>
            <div className={clsx(styles.container)}>
                {currentProducts.map((product) => (
                    <ProductItem key={product.id} productItem={product} handleOnClick={handleOnClickCart} />
                ))
                }
            </div>
            <div>
                <div className={clsx(styles.numberPages, "flex")}>
                    <button onClick={handlePrePage}><i class="fa-solid fa-angle-left"></i></button>
                    {
                        Array.from(Array(totalPages), (value, index) => (
                            <button
                                key={index + 1}
                                onClick={() => handlePageChange(index + 1)}
                                disabled={currentPage === index + 1}
                            >
                                {index + 1}
                            </button>
                        ))
                    }
                    <button onClick={handleNextPage}><i class="fa-solid fa-chevron-right"></i></button>
                </div>

            </div>
        </>
    )
}

export default Container