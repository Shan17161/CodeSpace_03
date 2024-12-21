import { createContext, useContext, useState } from "react";

export const ProductContext = createContext({
    products: [{
        id: 1,
        name,
    }],
    addProduct: (product)=>{},
    deleteProduct: (id)=>{},
    updateProduct: (id)=>{}
})


export const useProduct = ()=>{
    return useContext(ProductContext)
}

export const Provider = ProductContext.Provider