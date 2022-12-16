

//  import * as types from "./actionTypes"
 

// const initialState = {
//     product: [],
//     allProduct: [],
   
//     isLoading: false,
//     isError: false,
 
// }

// const reducer = (state = initialState, action) => {
//     const { type, payload } = action
//     switch (type) {
//         case types.POST_REQUEST_PRODUCT:
//             return {
//                 ...state,
//                 isLoading: true
//             }
//         case types.POST_SUCCESS_PRODUCT:
//             return {
//                 ...state,
//                 product: [...payload],
//                 isLoading: false
//             }
//         case types.POST_FAIL_PRODUCT:
//             return {
//                 ...state,
//                 isError: true,
//                 isLoading: false
//             }

//         case types.GET_PRODUCTS_REQUEST:
//             return {
//                 ...state,
//                 isLoading: true,
//             }

//         case types.GET_PRODUCTS_SUCCESS:
//             return {
//                 ...state,
//                 isLoading: false,
//                 product: payload
//             }
//         case types.GET_PRODUCTS_FAILURE:
//             return {
//                 ...state,
//                 isLoading: false,
//                 isError: true
//             }
       
        
//         case types.GET_REQUEST_PRODUCT:
//             return {
//                 ...state,
//                 isError: false,
//                 isLoading: true
//             }
//         case types.GET_SUCCESS_PRODUCT:
//             return {
//                 ...state,
//                 isLoading: false,
//                 product: [...payload]
//             }
//         case types.GET_FAIL_PRODUCT:
//             return {
//                 ...state,
//                 isLoading: false,
//                 isError: true
//             }
//         case types.DELETE_REQUEST_PRODUCT:
//             return {
//                 ...state,
//                 isLoading: true,
//             }
//         case type.GET_SUCCESS_PRODUCT:
//             return {
//                 ...state,
//                 isLoading: false,
//                 product: [...payload]
//             }
//         case types.DELETE_FAIL_PRODUCT:
//             return {
//                 ...state,
//                 isLoading: false,
//                 isError: true
//             }
//         case types.UPDATE_REQUEST_PRODUCT:
//             return {
//                 ...state,
//                 isLoading: true
//             }
//         case types.UPDATE_SUCCESS_PRODUCT:
//             return {
//                 ...state,
//                 isLoading: false,
//                 product: [...payload]
//             }
//         case types.UPDATE_FAIL_PRODUCT:
//             return {
//                 ...state,
//                 isLoading: false,
//                 isError: true
//             }
      
//         default:
//             return state;
//     }

// }

// export { reducer }