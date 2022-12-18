import axios from "axios"
import * as types from "./actionType"





const getProductRequest = ()=>{
    return{
        type:types.GET_PRODUCTS_REQUEST
    }
}

 export  const getProductList = (queryParams) => (dispatch)=>{
  
    // console.log(queryParams);
    dispatch(getProductRequest)

    return axios.get("https://political-wise-diver.glitch.me/products",queryParams).then((res)=>{
        dispatch({
            type:types.GET_PRODUCTS_SUCCESS,
            payload:res.data
        })
    }).catch((err)=>{
        dispatch({type:types.GET_PRODUCTS_FAILURE})
    })

}

const getMenProductRequest = ()=>{
    return{
        type:types.GET_MEN_PRODUCTS_REQUEST
    }
}

 export  const getMenProductList = (queryParams) => (dispatch)=>{
    // console.log(queryParams);
    dispatch(getMenProductRequest)

    return axios.get("https://geode-fishy-sundae.glitch.me/menpro",queryParams).then((res)=>{
        dispatch({
            type:types.GET_MEN_PRODUCTS_SUCCESS,
            payload:res.data
        })
    }).catch((err)=>{
        dispatch({type:types.GET_MEN_PRODUCTS_FAILURE})
    })

}

export const setSelectProduct = (payload)=>{
    return{
        type:types.SELECT_PRODUCT,
        payload
    }
}
export const setRemoveProduct = ()=>{
    return{
        type:types.REMOVE_PRODUCT,
        
    }
}



