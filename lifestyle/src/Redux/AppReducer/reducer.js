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
 
  
        default:
            return state;
    }

}

export { reducer }