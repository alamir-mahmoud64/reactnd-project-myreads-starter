import React from "react";

function ShelfChanger(props){
 const {book,changeShelf}=props;
    return <div className="book-shelf-changer">
        <select defaultValue={book.shelf?book.shelf:'none'} onChange={(event)=>{
          const newShelf = event.target.value;
          changeShelf(book,newShelf);
        }}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
}

export default ShelfChanger;