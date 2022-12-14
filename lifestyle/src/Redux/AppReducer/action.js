import * as types from "./actionTypes"
import axios from "axios"

 const getProductsRequest = ()=>(dispatch)=>{
    dispatch({type:types.GET_PRODUCTS_REQUEST})
    return axios.get(`https://twisty-careful-composer.glitch.me/products`).then((r)=>{
        dispatch({type:types.GET_PRODUCTS_SUCCESS,payload:r.data})
    }).catch((e)=>{
        dispatch({type:types.GET_PRODUCTS_ERROR})
    })
 }

 const addProducts = (payload)=>(dispatch)=>{
    dispatch({type:types.ADD_NEW_PRODUCT_REQUEST})
    return axios.post(`https://twisty-careful-composer.glitch.me/products`,payload).then((r)=>{
        dispatch({type:types.ADD_NEW_PRODUCT_SUCCESS,payload:r.data})
    }).catch((e)=>{
        dispatch({type:types.ADD_NEW_PRODUCT_ERROR,payload:e})
    })
 }

 const editProducts = (id,payload)=>(dispatch)=>{
    console.log(payload)
    dispatch({type:types.EDIT_PRODUCTS_REQUEST})
    return axios.patch(`https://twisty-careful-composer.glitch.me/products/${id}`,payload).then((res)=>{
        dispatch({type:types.EDIT_PRODUCT_SUCCESS,payload:res.data})
    }).catch((e)=>{
        dispatch({type:types.EDIT_PRODUCT_ERROR,payload:e})
    })
 }

 const deleteProducts = (id)=>(dispatch)=>{

    dispatch({type:types.DEL_PRODUCT_REQUEST})
    return axios.delete(`https://twisty-careful-composer.glitch.me/products/${Number(id)}`).then((r)=>{
        dispatch({type:types.DEL_PRODUCT_SUCCESS,payload:r})
    }).catch((e)=>{
        dispatch({type:types.DEL_PRODUCT_ERROR,payload:e})
    })

 }

export {getProductsRequest,addProducts,editProducts,deleteProducts}