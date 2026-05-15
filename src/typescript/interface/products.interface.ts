interface Products {
    id:number,
    title:string
    images:string,
    price:number
}


export interface ProductsInitialData {
    isLoading:boolean,
    isError:string | null,
    list:Products[]

}

export interface ProductsContextType {
    productsData:ProductsInitialData;
    fetchProductList:()=>Promise<any>;
}