import React from 'react';

const AllProduct = ({singleCard}) => {
    const {image, title, description} = singleCard;
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default AllProduct;