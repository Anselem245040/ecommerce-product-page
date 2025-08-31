import { useState } from "react";
export const Header = ({
  cart,
  cartOpen,
  setCartOpen,
  handleRemove,
  activeImage,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <h1>sneakers</h1>
      <ul className='desktop-menu'>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      {/* mobile menu */}
      <ul className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className='cart-container'>
        <button onClick={() => setCartOpen(!cartOpen)}>
          <i class='ri-shopping-cart-2-line'></i>
        </button>
        <div className='menu'>
          <i
            onClick={() => setMenuOpen((prev) => !prev)}
            class='ri-menu-line'
          ></i>
        </div>
        {cart.length > 0 && <span className='cart-badge'></span>}
      </div>
      {cartOpen && (
        <div className='cart-dropdown'>
          <h3>Cart</h3>
          {cart.length === 0 ? (
            <p className='cart-empty'>Your cart is empty.</p>
          ) : (
            <>
              <div className='cart-item'>
                <img src={activeImage} alt={cart[0].name} />
                <div className='cart-item-details'>
                  <p>{cart[0].name}</p>
                  <p>
                    ${cart[0].price} x {cart[0].quantity}{" "}
                    <b>${cart[0].price * cart[0].quantity}</b>
                  </p>
                </div>
                <span className='cart-remove' onClick={handleRemove}>
                  <i class='ri-delete-bin-line'></i>
                </span>
              </div>
              <button className='cart-checkout'>Checkout</button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};
