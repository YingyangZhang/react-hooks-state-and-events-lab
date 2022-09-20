import React, { useState } from "react";

function Item({ name, category }) {

  const [addedToCart, setAddedToCart] = useState(true);

  const displayCart = addedToCart ? 'Add to Cart' : 'Remove from Cart';
  const color = addedToCart ? 'add' : 'remove';

  function handleCart() {
    setAddedToCart(addedToCart => !addedToCart)
  }

  return (
    <li className={ addedToCart ? '' : 'in-cart' }>
      <span>{name}</span>
      <span className='category'>{category}</span>
      <button className={ color } onClick = { handleCart } style = {{ cursor: 'pointer' }}>{ displayCart }</button>
    </li>
  );
}

export default Item;
