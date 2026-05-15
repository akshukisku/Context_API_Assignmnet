import { api } from "../API";

export const fetchDatafns = async()=>{
    const response = await api.get("/products");
    return response.data.products
}