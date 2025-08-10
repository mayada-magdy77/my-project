import { apiClient } from "./api-client";

export async function getAllCatogeries(){
try {
        const options={
        url:'/categories',
        methode:"GET"
    }
              const response = await apiClient.request(options);
              return response;
} catch (error) {
    throw error
}
}



export async function getAllSubCatogeries(){
try {
        const options={
        url:'/subcategories',
        methode:"GET"
    }
              const response = await apiClient.request(options);
              return response;
} catch (error) {
    throw error
}
}


export async function getSpecificCatogeriey({id}){
try {
        const options={
        url:`/categories/${id}`,
        methode:"GET"
    }
              const response = await apiClient.request(options);
              return response;
} catch (error) {
    throw error
}
}