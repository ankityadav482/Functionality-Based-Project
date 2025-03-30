import axios from './axios'
import React, { createContext, useEffect, useState } from 'react'


export const ProductContext = createContext()

const Context = (props) => {

    const [products, setproducts] = useState( JSON.parse(localStorage.getItem("products")) || null)

    // const getproducts = async () =>{
    //     var response =  await   axios.get('/products')
    //     setproducts(response.data)
    // }

    // console.log(products)

    // useEffect(()=>{
    //     getproducts()
    // },[])


  return (
    <ProductContext.Provider value={[products, setproducts]}>
        {props.children}
    </ProductContext.Provider>
  )
}

export default Context