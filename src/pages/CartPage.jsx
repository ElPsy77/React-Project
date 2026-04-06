import { useAppContext } from '../context/AppContext';

function CartPage() {
  const { cart, cartTotal, clearCart, removeFromCart, updateQuantity } = useAppContext();

  return (
    <section>
      <h1>Cart</h1>
      {cart.length === 0 && <p className="muted">Your cart is empty.</p>}

      {cart.length > 0 && (
        <>
          <div className="cart-list">
            {cart.map((item) => (
              <article key={item.id} className="cart-item">
                <img src={item.thumbnail} alt={item.title} />
                <div className="cart-main">
                  <h3>{item.title}</h3>
                  <p className="muted">${item.price} each</p>
                  <div className="qty-controls">
                    <button type="button" onClick={() => updateQuantity(item.id, -1)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button type="button" onClick={() => updateQuantity(item.id, 1)}>
                      +
                    </button>
                  </div>
                </div>
                <button className="btn btn-ghost" type="button" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </article>
            ))}
          </div>
          <p className="total">Total: ${cartTotal.toFixed(2)}</p>
          <button className="btn" type="button" onClick={clearCart}>
            Clear cart
          </button>
        </>
      )}
    </section>
  );
}

export default CartPage;
