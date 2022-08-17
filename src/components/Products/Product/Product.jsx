import React from 'react';

const Product = ( { product_name, product_price } ) => {
    return (
        <div className={ 'alert alert-success' }>
            <h4 className={ 'alert-heading' }>Product Name: { product_name }</h4>
            <hr/>
            <p>Product Price: { product_price }</p>
        </div>
    );
};

export default Product;