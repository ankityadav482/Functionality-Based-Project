import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, useLocation } from 'react-router-dom'
import  {ProductContext} from "../utils/Context"
import Loading from './Loading'
import axios from '../utils/axios'

const Home = () => {

    const [products] = useContext(ProductContext)
    const {search} = useLocation();
    const category = decodeURIComponent(search.split("=")[1]);


    const [filteredProducts, setfilteredProducts] = useState(null)

    const getproductscategory = async () => {
        try {
            const {data} = await axios.get(`/products/category/${category}`);
            // filteredProducts = data
            setfilteredProducts(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(()=>{
        if(!filteredProducts  || category == "undefined") setfilteredProducts(products)
        if(category != "undefined"){

            //  getproductscategory()
            setfilteredProducts(products.filter(p => p.category == category))

            }
    },[category,products]);


    // console.log(filteredProducts)

  return ( products?
    <> 
    <Nav/>
    <div className='homescreen'>

        {filteredProducts && filteredProducts.map((p,i) => (
               <Link key={p.id}
               to={`/details/${p.id}`}
               className='card'>
                  <div className='imgg'
                      style={{
                        backgroundImage:`url(${p.image})`
                      }}>                      
                  </div>
                  <h4>{p.title}</h4>
              </Link>
        ))}



                
    </div>
    </> : <Loading/>
  )
}

export default Home