import React, { memo, useEffect, useState } from 'react';
import ProductTile from './product/ProductTile';
import './ProductList.less'

const ProductList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://demo5514996.mockable.io/products', {
            method: 'GET'
        })
            .then(function (response) { return response.json(); })
            .then(function (json) {
                setProducts(json.hits);
            });
    }, []);


    const title = 'Promos';
    return (
        <div>
            <div>{title}</div>
            <div className="product-list-container">
                {products && products.map(product => {
                    return <ProductTile product={product} key={product.objectID} />
                })}
            </div>
        </div>
    )
}

export default memo(ProductList)
