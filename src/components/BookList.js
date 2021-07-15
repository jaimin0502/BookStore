import React from 'react'
import Bookitem from './Bookitem'

function BookList({list,listName}) {
   
    const booklist=list.map(item=>{
      return(
            <Bookitem book={item} listName={listName}/>
        )
    })
    return (
        <>
        {booklist}
        </>
    )
}

export default BookList
