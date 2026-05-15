import type { ProductsInitialData } from "../typescript/interface/products.interface";
import type { ProductActionType } from "../typescript/type/product.type";

export const productsInitialData:ProductsInitialData={
    isLoading:false,
    isError:null,
    list:[]
}


export const productReducer = (state:ProductsInitialData,action:ProductActionType):ProductsInitialData=>{
    switch(action.type){
        case "START_FETCHING":
            return {...state,isLoading:true,isError:null}
        case "SUCCESS_FETCHING":
            return {...state,isLoading:false,list:action.payload}
        case "ERROR_FETCHING":
            return {...state,isLoading:false,isError:action.payload}
        default:
            return state
    }
    
}