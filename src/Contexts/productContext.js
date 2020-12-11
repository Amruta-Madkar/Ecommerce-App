import React, {createContext, useReducer} from "react"
import {ProductReducer} from "./productReducer"
import iphone from "../images/iphone.jpg";
import headphones from "../images/headphones.jpg"
import microphone from "../images/microphone.jpg"
import Bluetooth from "../images/Bluetooth.jpg"
import led from "../images/led.jpeg"
import watch from "../images/watch.jpg"
import macbook from "../images/macbook.jpg"
import dslr from "../images/dslr.jpg"
export const productContext = createContext();


const ProductContextProvider = (props) => {

    const [products] = useReducer(ProductReducer, [
        {id: 1, name: 'DSLR Camera', price: 40, image: dslr, productStatus: 'hot'},
        {id: 2, name: 'MacBook Air', price: 1178, image: macbook,productStatus: 'new'},
        {id: 3, name: 'Watch', price: 300, image: watch,productStatus: 'new'},
        {id: 4, name: 'Smart TV', price: 450, image: led,productStatus: 'new'},
        {id: 5, name: 'Microphone', price: 160, image: microphone,productStatus: 'hot'},
        {id: 6, name: 'Headphones', price: 500, image: headphones,productStatus: 'new'},
        {id: 7, name: 'Iphone X', price: 240, image: iphone,productStatus: 'hot'},
        {id: 8, name: 'Bluetooth', price: 120, image: Bluetooth,productStatus: 'new'},
      ])
      
    return(
        <productContext.Provider value={{products}}>
           {props.children}
        </productContext.Provider>
    )

}

export default ProductContextProvider;