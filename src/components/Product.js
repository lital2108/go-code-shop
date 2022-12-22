import './Product.css'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useContext } from "react";
import MyContext from "../MyContext";
import Alert from '@mui/material/Alert';


const Product=({imgUrl, title, price,id})=>{
  const { shoppingCart, setShoppingCart,productsData} = useContext(MyContext);

  const onAdd=()=>{
    const productExist=shoppingCart.find((i) => i.id === id)
    if(productExist){
      setShoppingCart(shoppingCart.map((i)=>i.id===id ? {...productExist, quantity:productExist.quantity+1} : i))
    }
    else{
        const newItem={id,  quantity: 1, title, price}
        setShoppingCart([...shoppingCart, newItem])
    }
}
const onRemove= () =>{
  const productExist=shoppingCart.find((i) => i.id === id)
  if(productExist){
    if(productExist.quantity===1){
      let shoppingCartProducts=shoppingCart.filter(i=>i.id!==id)
      setShoppingCart(shoppingCartProducts)
    }
    else{
    setShoppingCart(shoppingCart.map((i)=>i.id===id ? {...productExist, quantity:productExist.quantity-1} : i ))
    }
}}


    return(
      <div className="product-card">
        <div className="product-image">
          <img
            src={imgUrl}
          />
        </div>
        <div className="product-info">
          <h5>{title}</h5>
          <h6>{price}$</h6>
          <ControlPointIcon title='Add' onClick={()=>{onAdd(shoppingCart,setShoppingCart,id,productsData)}}/> 
          <RemoveCircleOutlineIcon title='Remove' onClick={()=>{onRemove(id,shoppingCart,setShoppingCart)}}/>
        </div>
      </div>
    );
  }

  export default Product;