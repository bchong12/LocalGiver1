import React from "react";
import HeaderDashboard from "../../Component/Header-dashboard/Header-dashboard.component";
import StripeCheckoutButton from "../../Component/stripe-button/stripe-button.component";
import "./Cart.component.css";
import axios from "axios";

class Cart extends React.Component {
  constructor() {
    super();

    this.state = {
      cart: [],
    };
  }

  setCart = () => {
    axios
      .get("https://ancient-woodland-39807.herokuapp.com/api/cart")
      .then((res) => {
        console.log(res);
        this.setState({
          cart: res.data,
        });
      });
  };

  componentDidMount() {
    this.setCart();
  }

  render() {
    return (
      <>
        <HeaderDashboard />
        <div className="cart-page-holder">
          <div className="cart-page">
            <h1 className="cart-title">Your Cart</h1>
            {this.state.cart.map((el, i) => {
              return (
                <div key={i} className="cart-item">
                  <p className="cart-item-title">{el.title}</p>
                  <p className="cart-item-price">{el.price}</p>
                </div>
              );
            })}
            <div className="buttons-cart">
              <StripeCheckoutButton />
              <button
                className="button-cart"
                onClick={() => {
                  axios
                    .delete(
                      "https://ancient-woodland-39807.herokuapp.com/api/cart"
                    )
                    .then((res) => {
                      this.setCart();
                    });
                }}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Cart;
