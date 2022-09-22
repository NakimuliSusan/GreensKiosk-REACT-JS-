import { useState, useEffect } from "react";


const Products =() =>{
    const [product, setProduct] = useState()
    const [loading , setLoading] = useState(false);
    useEffect(() => {   
        products()  
    },[])  
    const products = ()=>{
     fetch('http://localhost:5000/products')
     .then(res => res.json())
     .then(
      data => {
        setProduct(data)
        setLoading(true)
        console.log("fetched data----->",data )})
      .catch (err =>{throw  new Error (err.message)});
  }
  if(!loading){
    console.log("loading data----->",loading);
    return <div>Loading.........</div>
  }
      return (
         <div>
          <h2>Welcome to GreensKiosk</h2>
          <p id="unique">We have fruits and vegetables</p>
          <div className="container">
          <h3>All Products</h3>
          <div className="fruits">
            {product.map(item =>(
          <div key={item.id}>
              <p> {item.name}</p> 
          </div>
        ))} </div>
                 
          </div>
        </div>
      )
  }
  export default Products;