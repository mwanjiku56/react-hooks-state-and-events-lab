import React,{useState} from "react";

function Item({ name, category }) {
  const [inCart,setInCart]= useState(false)

  function addInCart(){
    setInCart((inCart)=>!inCart);
  }
  const confirmCart=inCart? "in-cart" : ""
  const putInCart=inCart? "Remove From Cart":"Add to Cart"
  return (
    <li className={confirmCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addInCart} className={confirmCart}>{putInCart}</button>
    </li>
  );
}

export default Item;
