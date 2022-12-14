import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsRequest,deleteProducts } from '../Redux/AppReducer/action'
 
 
 

const Admin = () => {
    const products = useSelector((store)=>store.products)
    const dispatch = useDispatch()
    const handleDelete = (id)=>{
        dispatch(deleteProducts(Number(id))).then(()=>{
            dispatch(getProductsRequest())
        })
    }
    
    useEffect(()=>{
        if(products.length===0){
            dispatch(getProductsRequest())
        }
    },[dispatch,products.length])
   
  return (
    <div>
        <h1>ADMIN PAGE</h1>
      <h2>  ADD PRODUCTS  </h2>
        <div>
            {
                products.length>0 && products.map((item)=> {
                    return (
                        <div>
                            <p>{Number(item.id)}</p>
                            <h1>{item.title}</h1>
                            <h2>{item.category}</h2>
                            <img src={item.image} alt={item.id} />
                            <h3>{item.price}</h3>
                            <button onClick={()=>handleDelete(item.id)}>DELETE</button>
                            <button  >  EDIT  </button>
                        </div>
                    )
                })
                     
                      
                      
                     
               
            }
            
        </div>
    </div>
  )
}

export default Admin