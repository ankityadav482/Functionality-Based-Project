import React, { useContext, useState } from 'react'
import { Form, useNavigate } from 'react-router-dom'
import { ProductContext } from '../utils/Context'
import {nanoid} from 'nanoid'
import { toast } from 'react-toastify'

const Create = () => {


    const navigate =  useNavigate();
    const[products,setproducts]=useContext(ProductContext)

    const [title, settitle] = useState("")
    const [image, setimage] = useState("")
    const [category, setcategory] = useState("")
    const [price, setprice] = useState("")
    const [description, setdescription] = useState("")


    const AddProductHandler = (e) => {
        e.preventDefault();

        if(title.trim().length < 5 || image.trim().length < 5 || category.trim().length < 5 || price.trim().length < 1 || description.trim().length < 5){
            alert("Each and every input must have atleast 4 characters");
            return;
        }

        const product = {
            id:nanoid(),
            title,
            image,
            category,
            price,
            description,
        }
        setproducts([...products , product])
        localStorage.setItem("products",JSON.stringify( [...products , product]    ));
        // console.log(product)
        toast.success("Product Added Successfully")
        navigate("/");
    }

    

  return (
        <form onSubmit={AddProductHandler}
         className='formcreate'>
                <h1>Add New Product</h1>

                <input value={image} onChange={(e)=>{
                        setimage(e.target.value)
                }}
                 type="url" placeholder='image link' />

                <input value={title} onChange={(e)=>{
                    settitle(e.target.value)
                }}
                 type="text" placeholder='title' />

            <div> 
                <input value={category} onChange={(e)=>{
                    setcategory(e.target.value)
                }}
                type="text" placeholder='category' />

                <input value={price} onChange={(e)=>{
                    setprice(e.target.value)
                }}
                 type="number" placeholder='price' />
            </div>

            <textarea
                value={description}
                onChange={(e) => setdescription(e.target.value)}
                rows={10}
                placeholder="Enter product description here..."
            ></textarea>

            <button type="submit">Add  Product</button>


        </form>
  )
}

export default Create