import React, { useEffect, useState } from 'react';
import AllProduct from './AllProduct';

const Product = () => {
    const [cards, setCard] = useState([])

    useEffect(() => {
        fetch("data.json")
        .then(res => res.json())
        .then(data => setCard(data))

    }, [] )
    return (
        <div className="grid md:grid-cols-2 gap-6">
          {
            cards.map((singleCard, index) => <AllProduct key={index} singleCard={singleCard} />)
          }
        </div>
    );
};

export default Product;