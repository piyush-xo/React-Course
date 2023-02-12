import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemAddHandler = (item) => {};

  const cartItemRemoveHandler = (id) => {};

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((cartItem) => (
        <CartItem
          key={cartItem.id}
          name={cartItem.name}
          price={cartItem.price}
          amount={cartItem.amount}
          onAdd={cartItemAddHandler.bind(null, cartItem)}
          onRemove={cartItemRemoveHandler.bind(null, cartItem.id)}
        ></CartItem>
      ))}
    </ul>
  );
  const totalCartAmount = +cartCtx.amount;
  const hasItems = cartCtx.items.length > 0;

  return (
    <Modal onCloseCart={props.onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${totalCartAmount.toFixed(2)}`}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
