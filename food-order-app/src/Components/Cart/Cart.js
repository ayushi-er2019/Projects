import {useContext, useState} from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';

function Cart(props) {
  const[isCheckOut, setIsCheckOut] = useState(false);

  const cartCtx= useContext(CartContext);

  const cartItemAddHandler =item=>{
      cartCtx.addItem({...item, amount: 1});
  };
  const cartItemRemoveHandler=id=>{
      cartCtx.removeItem(id);
  };

  const orderHandler =()=>{
    setIsCheckOut(true);
  };

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

    const cartItems=<ul className= {classes['cart-items']}> {
        cartCtx.items.map((item)=> (
            <CartItem 
            key={item.id} 
            name= {item.name} 
            amount={item.amount}
             price ={item.price}
             onRemove= {cartItemRemoveHandler.bind(null, item.id)}
             onAdd= {cartItemAddHandler.bind(null, item)}
             />
        )) } </ul>;

    const modalActions = (
    <div className={classes.actions}>
    <button className= {classes['button--alt']} onClick={props.onClose}>
        Close
    </button>
    {hasItems && <button className={classes.button} onClick={orderHandler}>
        Order
    </button>}

    </div>
    );

    return(
    <Modal onClose={props.onClose}>
            {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        {isCheckOut && <Checkout onCancel={props.onClose} />}
        {!isCheckOut && modalActions}        
    </Modal>
    );


};

export default Cart;
