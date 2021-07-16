import React from 'react'
import { books } from '../assets/books';
import "./css/Bookitem.css";

function Bookitem({ book ,listName}) {
    // console.log(listName);
    const addToCart = () => {
        
        let oldCart = localStorage.getItem("cart");
        
        if(oldCart===null)
        { 
             book.count=1;
            localStorage.setItem("cart", JSON.stringify([book]));
        }
        else{
            oldCart = JSON.parse(oldCart);
            console.log(oldCart)
            const index = oldCart.findIndex(
                (cartItem) => cartItem.id === book.id
             );
             console.log(index);
             if(index>=0)
             {
                 oldCart[index].count= oldCart[index].count+1;
                 console.log(oldCart[index]);
             }
             else{
                book.count=1;
                oldCart.push(book);
             }
            localStorage.setItem("cart", JSON.stringify(oldCart));
        }  
        alert(`${book.description} added successfully`);
    }
    return (
        <>
            <div className="book-item">
                <img src={book.image} alt="book image" />
                <div className="book_info">
                    <p style={{fontWeight:"bolder"}}>{book.description}</p>
                    <p style={{fontStyle:"italic"}}>{book.author}</p>
                    <p>{book.gen}</p>
                    <p>{book.noOfPages}</p>
                    <p>
                        <small style={{marginRight:"5px"}}>Rs.</small>
                        <strong>{book.price}</strong>
                    </p>
                    {
                        (listName==="cart") && <p>Count : {book.count}</p>
                    }
                    <div className="book_rating">
                    {
                        Array(book.rating).fill().map((_) => (
                            <p>⭐</p>
                        ))
                    }
                    </div>
                </div>

               

               {
                (listName==="books"&& book.isSold===false)?
                (<button onClick={addToCart}>Add To Cart</button>):
                (listName==="books"&& book.isSold===true)?
                (<button onClick={()=>{alert("out of stock")}}>Sold Out</button>):
                (  <button>Remove From Cart</button>)
                }
            </div>
        </>
    )
}

export default Bookitem
