import './App.css';
import Header from './components/Header'
import Products from './components/Products';
import { useEffect,useState } from 'react';
// import { useState } from 'react';
import MyContext from "./MyContext";
import CartDrawer from './components/Drawer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';


function App() {
  const [allProducts, setAllProducts]=useState([])
  const [productsData, setProductsData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cartOpen,setCartOpen] = useState(false);
  const [shoppingCart,setShoppingCart]=useState([])

  const fetchData = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    setProductsData(data);
    setAllProducts(data)
    setCategories(data.map(p => p.category).filter((value, index, array) => array.indexOf(value)===index));
  }

    useEffect(() => {
      fetchData();
      },[])

    const onClose=()=>{
      setCartOpen(false)
    }

  return (
      <MyContext.Provider value={{productsData, setProductsData, categories, allProducts,shoppingCart,setShoppingCart}}>
        <div className="App">
          <div>
            <CartDrawer onClose={onClose} open={cartOpen}></CartDrawer>
            <IconButton onClick={()=>setCartOpen(true)} title='Shopping Cart' color="primary" aria-label="shopping cart">
               <ShoppingCartIcon />
            </IconButton>           
            <Header/>
            <Products/>
          </div>
        </div>
    </MyContext.Provider>
  );
}

export default App;
