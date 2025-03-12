import { CSSProperties, useEffect, useState } from "react";
import Header from "../components/Header";

const styles: { [key: string]: CSSProperties } = {
  headerContainer: {
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  productName: {
    fontSize: "2rem",
    margin: "1rem",
    fontWeight: "bold",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  cartButton: {
    backgroundColor: "#000",
    fontWeight: "bold",
    color: "#fff",
    textTransform: "none" as const,
    width: "200px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "1rem",
  },
  emptyCart: {
    textAlign: "center",
    fontSize: "18px",
    fontWeight: "bold",
    color: "gray",
    margin: "20px 0",
  },
};

type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  color: string;
  image: string;
  quantity: number;
};

function Cart() {
  const [cart, setCart] = useState<Product[]>([]);
  const [giftWrap, setGiftWrap] = useState<boolean>(false);

  const updateQuantity = (id: number, delta: number) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(1, product.quantity + delta) }
          : product
      )
    );
  };

  const removeItem = (id: number) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };

  const total =
    cart.reduce((sum, product) => sum + product.price * product.quantity, 0) +
    (giftWrap ? 10 : 0);

  useEffect(() => {
    // get the cart from local storage
    const cart = localStorage.getItem("cart");
    if (cart) {
      setCart(JSON.parse(cart));
    }
  }, [total]);

  return (
    <div>
      <div style={styles.headerContainer}>
        <Header />
        <h1 style={styles.productName}>Votre panier</h1>
      </div>
      <div className="cart-container">
        {cart.length === 0 ? (
          <p className="empty-cart">Votre panier est vide</p>
        ) : (
          <>
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Produit</th>
                  <th>Prix</th>
                  <th>Quantité</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => (
                  <tr key={product.id}>
                    <td className="product-info">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                      />
                      <div>
                        <span className="product-name">{product.name}</span>
                        <div className="product-color">
                          Color : {product.color}
                        </div>
                        <button
                          className="remove-button"
                          onClick={() => removeItem(product.id)}
                        >
                          Supprimer
                        </button>
                      </div>
                    </td>
                    <td>
                      {product.oldPrice && (
                        <span className="old-price">
                          ${product.oldPrice.toFixed(2)}
                        </span>
                      )}
                      <span className="current-price">
                        ${product.price.toFixed(2)}
                      </span>
                    </td>
                    <td>
                      <div className="quantity-control">
                        <button onClick={() => updateQuantity(product.id, -1)}>
                          -
                        </button>
                        <span>{product.quantity}</span>
                        <button onClick={() => updateQuantity(product.id, 1)}>
                          +
                        </button>
                      </div>
                    </td>
                    <td>${(product.price * product.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="gift-wrap">
              <label>
                <input
                  type="checkbox"
                  checked={giftWrap}
                  onChange={() => setGiftWrap(!giftWrap)}
                />
                $10.00 De Plus Pour Emballer
              </label>
            </div>

            <div className="total-section">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button className="payment-button">Paiement</button>
          </>
        )}

        <style>{`
        .cart-container {
          max-width: 800px;
          margin: auto;
          padding: 20px;
        }
        .cart-table {
          width: 100%;
          border-collapse: collapse;
        }
        .cart-table th, .cart-table td {
          border-bottom: 1px solid #ddd;
          padding: 10px;
          text-align: left;
        }
        .product-info {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .product-image {
          width: 50px;
          height: 30px;
        }
        .product-name {
          font-weight: bold;
        }
        .product-color {
          color: gray;
          font-size: 14px;
        }
        .remove-button {
          color: red;
          text-decoration: underline;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 14px;
        }
        .old-price {
          text-decoration: line-through;
          color: gray;
          margin-right: 8px;
        }
        .current-price {
          font-weight: bold;
          color: red;
        }
        .quantity-control {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 5px;
          border-radius: 5px;
        }
        .quantity-control button {
          background: none;
          border: none;
          font-size: 16px;
          cursor: pointer;
          border: 1px solid #ccc;
          color: black;
        }
        .gift-wrap {
          display: flex;
          align-items: center;
          margin: 20px 0;
          font-size: 16px;
          color: gray;
        }
        .total-section {
          display: flex;
          justify-content: space-between;
          font-size: 18px;
          font-weight: bold;
          margin: 20px 0;
        }
        .payment-button {
          width: 100%;
          padding: 15px;
          background: black;
          color: white;
          border: none;
          font-size: 18px;
          cursor: pointer;
          border-radius: 5px;
        }
        .empty-cart {
          text-align: center;
          font-size: 18px;
          font-weight: bold;
          color: gray;
          margin: 20px 0;
        }
      `}</style>
      </div>
    </div>
  );
}

export default Cart;
