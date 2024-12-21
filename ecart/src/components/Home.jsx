import React, { useState } from "react"
import { useProduct, Provider } from "../context/Product.Context"
import Details from "./Details"
// import Product from "./Product"
function Home(){
    
    const [item, setItem] = useState('')
    const [products, setProducts] = useState([])
    const [editId, setEditId] = useState(false)

    // console.log("update",update)
    const addProduct= (product)=>{
        setProducts([...products, {id: Date.now(), name: product}])
    }

    const deleteProduct = (id)=>{
        setProducts((prev)=>prev.filter((product)=>product.id!==id))
    }


    const startUpdate = (id) => {
        const productToEdit = products.find((product) => product.id === id);
        if (productToEdit) {
            setItem(productToEdit.name); // Prefill the input with the product name
            setEditId(id); // Set the ID of the product being edited
        }
    };

    const updateProduct = (e) => {
        e.preventDefault();
        if (editId) {
            setProducts((prev) =>
                prev.map((product) =>
                    product.id === editId ? { ...product, name: item } : product
                )
            );
            setEditId(null); // Reset editId after updating
            setItem(''); // Clear the input
        }
    };


    const handleChange = (e)=>{
        setItem(e.target.value)
    }

    const addItem = (e)=>{
        e.preventDefault()
        if (item){

            addProduct(item)
        }
        setItem('')
    }

    return(
        <>
        <Provider value={{products, addProduct, deleteProduct, updateProduct}}>
        <h1>This is a Home Page</h1>
        <div>
        <form onSubmit={addItem}>
            <input value={item} onChange={handleChange} type="text" placeholder="Enter product name to add"/>
            <button type="submit">Add</button>
        </form>
    </div>
        <div>
            <h3>Products</h3>
            <ul>
                {products.map((val)=>{
                    return (<li key={val.id} className="flex justify-evenly item-center">
                        <p>{val.name}</p>
                        <button onClick={() => startUpdate(val.id)}>Update</button>
                        <button onClick={() => deleteProduct(val.id)}>Delete</button>
                    </li>)
                })}
            </ul>
        </div>
        </Provider>
        </>
    )
}

export default Home