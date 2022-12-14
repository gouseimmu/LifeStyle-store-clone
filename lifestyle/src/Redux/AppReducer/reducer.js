import * as types from "./actionTypes"
const initialState = {
    isLoading : false,
    isError:false,
    products:[]
}

const reducer = (state=initialState,action)=>{
    const {type,payload} =  action
    switch(type){
        case types.GET_PRODUCTS_REQUEST:
            return {...state,isLoading:true,isError:false}
        case types.GET_PRODUCTS_SUCCESS:
            return {...state,isLoading:false,isError:false,products:payload}
        case types.GET_PRODUCTS_ERROR:
            return {...state,isLoading:false,isError:true}
        default:
            return state
    }

}

export {reducer}