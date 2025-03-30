import React, { useContext } from 'react'
import { ProductContext } from '../utils/Context'
import { Link } from 'react-router-dom';

const Nav = () => {
    
    const [products] = useContext(ProductContext)
    let distinct_category = products && products.reduce((acc,cv)=>[...acc,cv.category],[]);

    distinct_category = [...new Set(distinct_category)]

  

    const color = () => {
        return `rgba(${(Math.random()*255).toFixed()}, ${(Math.random()*255).toFixed()}, ${(Math.random()*255).toFixed()}, 0.4)`;
    };
    


  return (
    <nav>
    <a href="/create">Add to Cart</a>
    <hr className='hr'/>
    <h1>Category Filter</h1>
    <div className='ui'>

        {distinct_category.map((c,i)=>(
                    <Link key={i} to={`/?category=${c}`}  className='li'> 
                        <span style={{backgroundColor:color()}} className='span1'></span> 
                             {c} 
                    </Link>

        ))}

        
    </div>
  </nav>
  )
}

export default Nav