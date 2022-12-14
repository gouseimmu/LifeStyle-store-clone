 

import React from 'react'
import { useReducer } from 'react'
import { useDispatch } from 'react-redux'
 
import { addProducts, getProductsRequest  } from '../Redux/AppReducer/action'
import Admin from './Admin'
 


const initialState = {
    title:"",
    category:"",
    price:0,
    image:"",
}
const reducerFunc = (state,action)=>{
         const {type,payload}= action
         switch(type){
             case "title":
             return {...state,title:payload}
         case "category":
             return {...state,category:payload}
         case "price":
             return {...state,price:payload}
         case "image":
             return {...state,image:payload}
             default:
                 return state
         }
        }
const AddProduct = () => {

         
                const dispatch = useDispatch()
                
                const [productState,setProductState] = useReducer(reducerFunc,initialState)
                const addhandler = ()=>{
                    if(JSON.stringify(productState) !== JSON.stringify(initialState)){
                       dispatch(addProducts(productState)).then(()=>{
                        dispatch(getProductsRequest())
                       })
                    }
                }
            
  return (
    <div>
        <h1>AddProduct</h1>
            <div >
                <div>
                    <label>Product Title</label>
                    <input placeholder='Enter Title' type="text" value={productState.title}  onChange={(e)=>setProductState({type:"title",payload:e.target.value})}/>
    
                </div>
                <div  >
                    <label >Product Category</label>
                    <select value={productState.category} onChange={(e)=>setProductState({type:"category" ,payload:e.target.value})}>
                        <option value="">Select Category</option>
                        <option value="kurtas and kurtis">Kurtas and Kurtis</option>
                        <option value="mens">Mens Wear</option>
                        <option value="womens">Womens Wear</option>
                    </select>
                </div>
                <div>
                    <label>Product Image</label>
                    <input type="url" placeholder='Image URL' value={productState.image} onChange={(e)=>setProductState({type:"image",payload:e.target.value})}/>
                </div>
                <div>
                    <label>Product price</label>
                    <input type="text" placeholder=' enter Price' value={productState.price} onChange={(e)=>setProductState({type:"price",payload:e.target.value})}/>
                </div>
                <div>
                    <button  onClick={addhandler}>ADD PRODUCT</button>
                </div>
    
            </div>
           {<Admin/>}
        </div>
  )
}

export default AddProduct