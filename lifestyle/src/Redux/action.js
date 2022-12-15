import axios from "axios"
import * as types from "./actionType"



// export const getProduct = () => (dispatch) => {
//     dispatch({type:types.GET_REQUEST_PRODUCT})
//     return axios.get(`http://localhost:8080/product`)
//     .then((res)=>{
//         return dispatch({type:types.GET_SUCCESS_PRODUCT,payload:res.data})
//     }).catch((err)=>{
//         return dispatch({type:types.GET_FAIL_PRODUCT})
//     })
// } 



const getProductRequest = ()=>{
    return{
        type:types.GET_PRODUCTS_REQUEST
    }
}

 export  const getProductList = (queryParams) => (dispatch)=>{
  
    // console.log(queryParams);
    dispatch(getProductRequest)

    return axios.get("http://localhost:8080/product",queryParams).then((res)=>{
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

    return axios.get("http://localhost:8080/menpro",queryParams).then((res)=>{
        dispatch({
            type:types.GET_MEN_PRODUCTS_SUCCESS,
            payload:res.data
        })
    }).catch((err)=>{
        dispatch({type:types.GET_MEN_PRODUCTS_FAILURE})
    })

}


// export const getAllProduct=(dispatch)=>{
//    return axios.get("http://localhost:8080/product")
//    .then((res)=>dispatch({type:types.GET_SUCCESS_ALLPRODUCT,payload:res.data}))
//    .catch((err)=>console.log(err))

// }

