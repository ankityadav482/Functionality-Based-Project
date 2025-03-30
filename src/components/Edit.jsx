// import React, { useContext, useEffect, useState } from 'react'
// import { Form, useNavigate, useParams } from 'react-router-dom'
// import { ProductContext } from '../utils/Context'


import  React,{useContext,useEffect,useState} from 'react'
import {Form,useNavigate,useParams} from 'react-router-dom'
import {ProductContext} from '../utils/Context'


const Edit = () => {


    
    const[products,setproducts]=useContext(ProductContext)
    const navigate =  useNavigate();
    const { id } = useParams();
    const [product, setproduct] = useState({
        title: "",
        description: "",
        image: "",
        price: "",
        category: "",
    })
    
    const ChangeHandler = (e) =>{
        // console.log(e.target.name , e.target.value);
        setproduct({ ...product , [e.target.name]: e.target.value })
    }



    // const [title, settitle] = useState("")
    // const [image, setimage] = useState("")
    // const [category, setcategory] = useState("")
    // const [price, setprice] = useState("")
    // const [description, setdescription] = useState("")


    useEffect(()=>{
        setproduct(products.filter((p) => p.id == id )[0])
    },[id])

   

    const AddProductHandler = (e) => {
        e.preventDefault();

        if(product.title.trim().length < 5 ||
            product.image.trim().length < 5 || 
            product.category.trim().length < 5 ||
            product.price.trim().length < 1 || 
            product.description.trim().length < 5
        ){
            alert("Each and every input must have atleast 4 characters");
            return;
        }

        const pi = products.findIndex((p) => p.id == id )

        const copyData = [...products];
        copyData[pi] = {...products[pi],...product}


        // console.log(copyData)
       
         setproducts(copyData)
         localStorage.setItem("products",JSON.stringify( copyData   ));
        // console.log(product)
         navigate(-1);
    }

    // console.log(products)

  return (
    <form onSubmit={AddProductHandler}
    className='formcreate'>
           <h1>Edit Product</h1>

           <input value={product && product.image} name='image' onChange={ChangeHandler}
            type="url" placeholder='image link' />

           <input value={product && product.title} name='title' onChange={ChangeHandler}
            type="text" placeholder='title' />

       <div> 
           <input value={product && product.category}  name='category' onChange={ChangeHandler}
           type="text" placeholder='category' />

           <input value={product && product.price} name='price' onChange={ChangeHandler}
            type="number" placeholder='price' />
       </div>

       <textarea
           value={product && product.description}
           name='description' onChange={ChangeHandler}
           rows={10}
           placeholder="Enter product description here..."
       ></textarea>

       <button type="submit">Edit Product</button>


   </form>
  )
}

export default Edit