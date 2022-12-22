import Product from'./Product.js'
import './Products.css'
import { useContext } from "react";
import MyContext from "../MyContext";


const Products = () => {
  const {productsData} = useContext(MyContext);
  // console.log(productsData);
    return(
      <section className="products">
        {productsData.map((product)=>{
          return(
            <Product 
              key={product.id}
              imgUrl={product.image}
              title={product.title}
              price={product.price}
              id={product.id}
              />
          )
        })}

    </section>
    );
      }

    export default Products;