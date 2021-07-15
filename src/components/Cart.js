import React from 'react'
import BookList from './BookList';

function Cart() {

    let cart = localStorage.getItem("cart");
    cart=JSON.parse(cart);

    return (
           
               (cart!==null)?  
               <BookList list={cart} listName="cart"/>  :
               <>
                <h1 style={{textAlign:"center"}}>Cart is Empty</h1>
                <p style={{textAlign:"center"}}> Please Add A book In to The Cart</p>
                </>
           
         
    )
}

export default Cart
