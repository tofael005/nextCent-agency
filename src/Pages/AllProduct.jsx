import React from 'react';
import { Link } from 'react-router-dom';

const AllProduct = ({singleCard}) => {
    const { image, title, description } = singleCard;
    return (
        <div>
           <img className="md:h-[330px] w-full rounded" src={image} alt="" />
            <h1 className="text-2xl font-bold my-4">{title}</h1>
            <p className=''>{description}</p>
        </div>
    );
};

export default AllProduct;