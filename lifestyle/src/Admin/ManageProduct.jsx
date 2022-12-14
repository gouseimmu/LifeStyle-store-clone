import React from 'react'
import { useReducer } from 'react'
import { useDispatch } from 'react-redux'
import { editProducts } from '../Redux/AppReducer/action'
 


const initState = {
    image: "",
    title: "",
    price: "",
    category:  "",
    id: "",
    
  }

const reducerFunction = (state,action)=>{
    const {type,payload} = action
    switch(type){
        case "title":
            
            return {...state,title:payload }
        case "image":
            return {...state,image:payload}
        case "category":
            return {...state,category:payload}
        case "price":
            return {...state,category:payload}
        default:
            return state
    }
}

const ManageProduct = ( ) => {
    const dispatch = useDispatch()
    const [editProduct,setEditProduct] = useReducer(reducerFunction,initState)
    const edithandler = ()=>{
        dispatch(editProducts(editProduct))
    }
  return (
    <div>
        <h1> EDIT Product</h1>
            <div >
                <div>
                    <label>Product Title</label>
                    <input placeholder='Enter Title' type="text" value={editProduct.title}  onChange={(e)=>setEditProduct({type:"title",payload:e.target.value})}/>
    
                </div>
                <div  >
                    <label >Product Category</label>
                    <select value={editProduct.category} onChange={(e)=>setEditProduct({type:"category" ,payload:e.target.value})}>
                        <option value="">Select Category</option>
                        <option value="kurtas and kurtis">Kurtas and Kurtis</option>
                        <option value="mens">Mens Wear</option>
                        <option value="womens">Womens Wear</option>
                    </select>
                </div>
                <div>
                    <label>Product Image</label>
                    <input type="url" placeholder='Image URL' value={editProduct.image} onChange={(e)=>setEditProduct({type:"image",payload:e.target.value})}/>
                </div>
                <div>
                    <label>Product price</label>
                    <input type="number" placeholder=' enter Price' value={editProduct.price} onChange={(e)=>setEditProduct({type:"price",payload:e.target.value})}/>
                </div>
                <div>
                    <button  onClick={edithandler}>EDIT PRODUCT</button>
                </div>
    
            </div>
            
        </div>
  
  )
}

export default ManageProduct