import React from 'react'
// import { useContext } from "react";
// import MyContext from "../MyContext";


const Item = ({title, price,quantity}) => {
    // const {shoppingCart} = useContext(MyContext);
    return(
        <div>

          <div>
            <br></br>
            <span>{title}</span>
            <br></br>
            <span>Quantity: {quantity}</span>
            <br></br>
            <span>Price: {price}$</span>
          </div>


        </div>
      );
}
export default Item