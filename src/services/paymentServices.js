import { apiClient } from "./api-client"

export async function createOrder({paymentMethode,cartId,shippingAddress}){
    try {
        const options={
            method:"POST",
            data:{
                 shippingAddress,
            },

       
        };

         if (paymentMethode==="cod"){
            options.url=`orders/${cartId}`
        }
             
        else if(paymentMethode==="online") {
           
           options.url=`/orders/checkout-session/${cartId}?url=${location.origin}`
        }

        const respons=await apiClient.request(options);
        return respons

    } catch (error) {
        throw error
    }
}