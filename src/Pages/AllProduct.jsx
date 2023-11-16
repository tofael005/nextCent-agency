import React from 'react';

const AllProduct = ({singleCard}) => {
    const { image, title, description } = singleCard;
    return (
        <div>
           <img src={image} alt="" />
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default AllProduct;