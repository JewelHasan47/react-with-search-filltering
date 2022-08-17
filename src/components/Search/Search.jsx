import React, { useState } from 'react';
import Products from '../Products/Products';

const Search = () => {
    // Search functionality
    const [ searchTerm, setSearchTerm ] = useState( '' );

    const onClickHandling = ( e ) => {
        setSearchTerm( e.target.value )
    }

    return (
        <div className={ 'row' }>
            <div className={ 'col-md-12 mt-2' }>
                <div className={ 'input-group' }>
                    <input type="text" onChange={ onClickHandling } className={ 'form-control' }
                           placeholder={ 'Search Product Name Or Price' }/>
                    <div className={ 'input-group-append' }>
                        <span className={ 'input-group-text' }>Search</span>
                    </div>
                </div>
                <Products searchTerm={ searchTerm.toLowerCase() }/>
            </div>
        </div>
    );
};

export default Search;