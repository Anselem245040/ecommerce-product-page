import React from "react";
import "../index.css";

export const ProductInfo = ({
  product,
  handleAddToCart,
  setQuantity,
  quantity,
}) => {
  return (
    <div className='product-info'>
      <h2>Sneaker Company</h2>
      <h1>{product.name}</h1>
      <p>{product.description}</p>

      <div className='price-container'>
        <span>${product.price}</span>
        <span className='discount'>{product.discount}%</span>
      </div>
      <p className='old-price'>${product.oldPrice}</p>

      <div className='actions'>
        <div className='quantity-control'>
          <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>

        <button className='add-to-cart' onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
};
