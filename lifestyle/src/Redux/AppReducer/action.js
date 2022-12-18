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

    return axios.get("https://paper-ink-helium.glitch.me/products",queryParams).then((res)=>{
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

    return axios.get("https://solar-juvenile-camel.glitch.me/menpro",queryParams).then((res)=>{
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


export const addProducts = (payload)=>(dispatch)=>{
    dispatch({type:types.ADD_MEN_PRODUCTS_REQUEST})
    return axios.post(`https://solar-juvenile-camel.glitch.me/menpro`,payload).then((r)=>{
        dispatch({type:types.ADD_MEN_PRODUCTS_SUCCESS,payload:r.data})
    }).catch((e)=>{
        dispatch({type:types.ADD_MEN_PRODUCTS_FAILURE})
    })
}

export const updateProducts = (id,payload)=>(dispatch)=>{
    dispatch({type:types.UPDATE_MEN_PRODUCTS_REQUEST})
    return axios.patch(`https://solar-juvenile-camel.glitch.me/menpro/${id}`,payload).then((r)=>{
        dispatch({type:types.UPDATE_MEN_PRODUCTS_SUCCESS,payload:r.data})
    }).catch((e)=>{
        dispatch({type:types.UPDATE_MEN_PRODUCTS_FAILURE})
    })
}


export const deleteProducts = (id) => (dispatch)=>{
    dispatch({type:types.DELETE_MEN_PRODUCTS_REQUEST})
    return axios.delete(`https://solar-juvenile-camel.glitch.me/menpro/${id}`).then((r)=>{
        dispatch({type:types.DELETE_MEN_PRODUCTS_SUCCESS,payload:id})
    }).catch((e)=>{
        dispatch({type:types.DELETE_MEN_PRODUCTS_FAILURE})
    })
}

