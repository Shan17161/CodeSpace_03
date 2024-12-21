// import React from "react"
// import { useState } from "react"
// import { useProduct } from "../context/Product.Context"
// function Product(){
//     const {addProduct} = useProduct()
    
//     const [item, setItem] = useState('')

//     const handleChange = (e)=>{
//         setItem(e.target.value)
//     }

//     const addItem = (e)=>{
//         e.preventDefault()
//         addProduct(item)
//         setItem('')
//     }
//     return (
//     <>
//     <div>
//         <form onSubmit={addItem}>
//             <input value={item} onChange={handleChange} type="text" placeholder="Enter product name to add"/>
//             <button type="submit">Add</button>
//         </form>
//     </div>
//     </>
//     )
// }


// export default Product