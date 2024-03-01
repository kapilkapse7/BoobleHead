import React, { createContext, useEffect, useState } from "react";
// import all_product from "../Components/Assets/all_product"

export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart ={};
    for (let index = 0; index < 300+1; index++) {
        cart[index] =0;
    }
    return cart;
}

export const ShopContextProvider = (props)=>{
    const [all_product, setAll_Product] = useState([]);

    const [cartItems,setCartItems] = useState(getDefaultCart());
    useEffect(()=>{
        fetch('http://localhost:4000/allproducts')
        .then((res)=>res.json())
        .then((data)=>setAll_Product(data));
    },[])

    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const itemId of Object.keys(cartItems)) {
            const item = cartItems[itemId];
            if (item > 0) {
                console.log("Success");
                const itemInfo = all_product.find((product) => product.id === Number(itemId));
                totalAmount += itemInfo.new_price * item;
            } 
        }
        return totalAmount;
    };


    const totalItem = () => {
        let total = 0;
        for (const itemId of Object.keys(cartItems)) {
            const item = cartItems[itemId];
            if (item > 0) {
                console.log("Success");
                const itemInfo = all_product.find((product) => product.id === Number(itemId));
                total += item;
            } 
        }
        return total;
    };

    // const getTotalCartAmount = () =>{
    //     let totalAmount =0;
    //     for(const item in cartItems)
    //     {
    //         if(item>0){
    //             console.log("Sucess")
    //             let itemInfo = all_product.find( (product)=>product.id === Number(item))
    //             totalAmount+= itemInfo.new_price*cartItems[item];
    //         }else{
    //             console.log("faliure")
    //         }
    //         return totalAmount;
    //     }
    // }

    const contextValue = {all_product,cartItems,addToCart,removeFromCart,getTotalCartAmount,totalItem}



    return (
        <ShopContext.Provider value={contextValue}>
        {props.children}
        </ShopContext.Provider>
    )



}

export default ShopContextProvider