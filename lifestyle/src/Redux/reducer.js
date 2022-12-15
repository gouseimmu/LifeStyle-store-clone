import * as types from "./actionType"
import { getlocaldata, setlocaldata } from "../utils/localstoragedata"

const initialState = {
    product: [],
    isLoading: false,
    isError: false,
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

 
  
        default:
            return state;
    }

}

export { reducer }