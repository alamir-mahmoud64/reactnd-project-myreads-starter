import React from "react";
import ShelfChanger from "./ShelfChanger";

function Book(props){
    return <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: (props.book.imageLinks&&props.book.imageLinks.thumbnail)?`url(${props.book.imageLinks.thumbnail})`:'' }}></div>
      <ShelfChanger book={props.book} changeShelf={props.changeShelf} />
    </div>
    <div className="book-title">{props.book.title}</div>
    <div className="book-authors">{props.book.authors?props.book.authors.join(', '):''}</div>
  </div>
}

export default Book;
          