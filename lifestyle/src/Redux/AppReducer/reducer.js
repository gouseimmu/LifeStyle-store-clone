import * as types from "./actionType"


const initialState = {
    product: [],
    isLoading: false,
    isError: false,
    singleProduct: null
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {

        case types.GET_PRODUCTS_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        case types.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                product: payload
            }
        case types.GET_PRODUCTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }

            case types.GET_MEN_PRODUCTS_REQUEST:
                return {
                    ...state,
                    isLoading: true,
                }
    
            case types.GET_MEN_PRODUCTS_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    product: payload
                }
            case types.GET_MEN_PRODUCTS_FAILURE:
                return {
                    ...state,
                    isLoading: false,
                    isError: true
                }
                case types.SELECT_PRODUCT:
                    return {
                        ...state,
                        singleProduct: payload
                    }
                case types.REMOVE_PRODUCT:
                    return {
                        ...state,
                        singleProduct: null
                    }
                    case types.ADD_MEN_PRODUCTS_REQUEST:{
                        return {
                            ...state,isLoading:true
                        }
                    }
                    case types.ADD_MEN_PRODUCTS_SUCCESS:
                        return {
                            ...state,isLoading:false,product:[...state.product,payload]
                        }
                    case types.ADD_MEN_PRODUCTS_FAILURE:
                        return {
                            ...state,isError:true
                        }
                    case types.UPDATE_MEN_PRODUCTS_REQUEST:
                        return {
                            ...state,isLoading:true
                        }
                    case types.UPDATE_MEN_PRODUCTS_SUCCESS:
                         return {
                            ...state,isLoading:false,product:state.product.map((item)=>item.id === payload.id ? payload:item)
                         }
                        case types.UPDATE_MEN_PRODUCTS_FAILURE:
                            return {...state,isError:true,isLoading:false}
                        case types.DELETE_MEN_PRODUCTS_REQUEST:
                            return {
                                ...state,isLoading:true
                            }
                        case types.DELETE_MEN_PRODUCTS_SUCCESS:
                        let filter = state.product.filter((item)=>item.id !== payload)
                            return {
                                    ...state,isLoading:false,product:filter
                            }
                        case types.DELETE_MEN_PRODUCTS_FAILURE:
                            return {...state,isLoading:false,isError:true}
                    
 
  
        default:
            return state;
    }

}

export { reducer }