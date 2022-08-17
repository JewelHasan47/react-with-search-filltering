import React from 'react';
import ProductData from '../../database/products.json';
import Product from './Product/Product'
import Card from '../Card/Card'

const Products = ( { searchTerm } ) => {

    return (
        <div className={ 'row' }>
            <div className={ 'col-md-12 mt-3' }>
                {/* eslint-disable-next-line array-callback-return */}
                { ProductData.filter( ( value ) => {
                    if( searchTerm === '' ) {
                        return value;
                    } else if( value.product_name.toLowerCase().includes( searchTerm ) ) {
                        return value.product_name;
                    }
                } ).map( data =>
                    <Card key={ data.id }>
                        <Product product_name={ data.product_name } product_price={ data.product_price }/>
                    </Card>
                ) }
            </div>
        </div>
    );
};

export default Products;