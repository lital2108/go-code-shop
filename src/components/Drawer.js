import React from 'react'
import Drawer from '@mui/material/Drawer'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './Drawer.css'
import { useContext } from "react";
import MyContext from "../MyContext";
import Item from './Item';

export default function CartDrawer({open,onClose}) {
    const { shoppingCart} = useContext(MyContext);

    return (
      <div >
            <Drawer anchor={'right'} open={open} PaperProps={{ style: { width: '50%' } }}>
                <p class='cart'>Your Cart <ShoppingBasketIcon color='primary'/></p>
                <section className="items">
                  {shoppingCart.map((item)=>{
                    return(
                      <Item 
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        quantity={item.quantity}
                        id={item.id}
                        />
                    )
                  })}

              </section>
                <button class='button' onClick={onClose}>Continue Shopping</button>
            </Drawer>        
      </div>
    );
  }