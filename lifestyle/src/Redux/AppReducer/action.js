
// import axios from "axios"
// import * as types from "./actionTypes"

// export const addProduct = (queryParams) => (dispatch) => {
//     dispatch({ type: types.POST_REQUEST_PRODUCT })
//     return axios.post( `https://twisty-careful-composer.glitch.me/products`,queryParams).then((res) => {
//         // console.log(res);
//         return dispatch({type:types.POST_SUCCESS_PRODUCT,paylod:res.data})
//     }).catch((err) => {
//         return dispatch({type:types.POST_SUCCESS_PRODUCT})
//     })
// }

// export const getProduct = () => (dispatch) => {
//     dispatch({type:types.GET_REQUEST_PRODUCT})
//     return axios.get(`https://twisty-careful-composer.glitch.me/products`)
//     .then((res)=>{
//         return dispatch({type:types.GET_SUCCESS_PRODUCT,payload:res.data})
//     }).catch((err)=>{
//         return dispatch({type:types.GET_FAIL_PRODUCT})
//     })
// } 

// export const deleteProduct= (id) => (dispatch)=>{
//     dispatch({type:types.DELETE_REQUEST_PRODUCT})
//     return axios.delete(`https://twisty-careful-composer.glitch.me/products/${id}`)
//     .then((res)=>{
//         dispatch({type:types.DELETE_SUCCESS_PRODUCT,payload:res.data})
//         // console.log(res.data);
//     })
//     .catch((err)=>{
//         dispatch({type:types.DELETE_FAIL_PRODUCT})
//         // console.log(err);
//     })
// }

// export const updateProduct = (data) => (dispatch) =>{
//     dispatch({type:types.UPDATE_REQUEST_PRODUCT})
//     return axios.patch(`https://twisty-careful-composer.glitch.me/products/${data.id}`,data)
//     .then((res)=>{
//         console.log(res.data);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// }

// const getProductRequest = ()=>{
//     return{
//         type:types.GET_PRODUCTS_REQUEST
//     }
// }

//  export  const getProductList = (queryParams) => (dispatch)=>{
  
//     // console.log(queryParams);
//     dispatch(getProductRequest)

//     return axios.get(`https://twisty-careful-composer.glitch.me/products`,queryParams).then((res)=>{
//         dispatch({
//             type:types.GET_PRODUCTS_SUCCESS,
//             payload:res.data
//         })
//     }).catch((err)=>{
//         dispatch({type:types.GET_PRODUCTS_FAILURE})
//     })

// }


 

// export const getAllProduct=(dispatch)=>{
//    return axios.get("https://twisty-careful-composer.glitch.me/products")
//    .then((res)=>dispatch({type:types.GET_SUCCESS_ALLPRODUCT,payload:res.data}))
//    .catch((err)=>console.log(err))

// }

 