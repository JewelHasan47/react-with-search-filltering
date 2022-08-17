import React from 'react';

const Card = ( props ) => {
    return (
        <div className="shadow mb-1 bg-white rounded">
            { props.children }
        </div>
    );
};

export default Card;