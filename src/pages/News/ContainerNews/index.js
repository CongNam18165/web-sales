import styles from './styles.module.scss';
import clsx from 'clsx';
import { useEffect, useState, useRef } from 'react';

function ContainerNews() {
    // const nameProduct = useRef()
    // const UrlImg = useRef()
    // const Price = useRef()
    // function handlePost() {
    //     var data = {
    //         name: nameProduct.current.value,
    //         img: UrlImg.current.value,
    //         price: Price.current.value
    //     }
    //     fetch('https://64560c052e41ccf1691288a4.mockapi.io/products', {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(data)
    //     })

    // }
    // function handleDelete(){
        
    // }
    // return (
    //     <>
    //         <h1>News</h1>
    //         <div className={clsx(styles.boxAddProducts)}>
    //             <div className={clsx(styles.boxNameProducts)}>
    //                 <label for="nameProduct">Ten san pham</label>
    //                 <input ref={nameProduct} id="nameProduct" type='text' />
    //             </div>
    //             <div className={clsx(styles.boxImgUrl)}>
    //                 <label for="imgUrl">Url Image</label>
    //                 <input ref={UrlImg} id="imgUrl" type='text' />
    //             </div>
    //             <div className={clsx(styles.boxPrice)}>
    //                 <label for="price">Price</label>
    //                 <input ref={Price} id="price" type='text' />
    //             </div>
    //             <div>
    //                 <button onClick={handlePost} className={clsx(styles.btnPost)}>Post</button>
    //                 <button onclick={handleDelete}>delete</button>
    //             </div>
    //         </div>
    //     </>
    // )
}
export default ContainerNews