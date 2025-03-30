import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ProductContext } from '../utils/Context'
import axios from '../utils/axios'
import Loading from './Loading'
// import React from 'react'

const Details = () => {
    
    const navigate = useNavigate();
    // const [products, setproducts] = useState(ProductContext)
    // const [products] = useContext(ProductContext) 
    // const {products , setproducts} = useContext(ProductContext)
    
    
    const[products,setproducts]=useContext(ProductContext)
    const [product, setproduct] = useState(null)
    const {id} = useParams()



    // const getsingleproduct = async () =>{
    //        var response = await axios.get(`/products/${id}`)
    //        setproduct(response.data)
    // }



    useEffect(()=>{
        if( !product){
            const selectedProduct = products.find(p => p.id == id)
            setproduct(selectedProduct)
        }
    }, [id, products])





    const ProductDeleteHandler = (id) => {

       const FilteredProducts = products.filter((p)=> p.id !== id);

    //    setproducts(FilteredProducts);
    //    localStorage.setItem("products",JSON.stringify(FilteredProducts));
    //    navigate("/");

       localStorage.setItem("products", JSON.stringify(FilteredProducts));
       setproducts(FilteredProducts);
       navigate("/");
       


    }

  return ( product ? 
    <div className='detail'>
        <img src={`${product.image}`} alt="" />

        <div className='detailObject'>
            <h1>{product.title}</h1>
            <h3>{product.category}</h3>
            <h2>${product.price}</h2>    
            <p>{product.description}</p>
            <Link to={`/edit/${product.id}`} >Edit</Link>
            <button  className='ank' onClick={() => ProductDeleteHandler(product.id)}>Delete</button>
        </div>

    </div> : <Loading/>
  )
}
 
export default Details