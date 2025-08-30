import { useState } from "react";
import "./App.css";

import "./App.css";
import { Header } from "./components/Header";
import productData from "./data/productData";
import { ProductInfo } from "./components/ProductInfo";
import { ProductGallery } from "./components/ProductGallery";

function App() {
  const [activeImage, setActiveImage] = useState(productData.images[0]);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);

  const handleAddToCart = () => {
    const item = { ...productData, quantity };
    setCart([item]);

    setQuantity(1);
  };

  const handleRemove = () => {
    setCart([]);
  };

  return (
    <div>
      <Header
        cart={cart}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        handleRemove={handleRemove}
        activeImage={activeImage}
      />
      <div className='main'>
        <ProductGallery
          activeImage={activeImage}
          setActiveImage={setActiveImage}
          image={productData.images}
        />
        <ProductInfo
          quantity={quantity}
          product={productData}
          handleAddToCart={handleAddToCart}
          setQuantity={setQuantity}
        />
      </div>
    </div>
  );
}

export default App;
