import React from "react";
import ShelfChanger from "./ShelfChanger";

function Book(props){
   const {book,changeShelf}=props;
    return <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: (book.imageLinks&&props.book.imageLinks.thumbnail)?`url(${book.imageLinks.thumbnail})`:'' }}></div>
      <ShelfChanger book={book} changeShelf={changeShelf} />
    </div>
    <div className="book-title">{book.title}</div>
    <div className="book-authors">{book.authors?book.authors.join(', '):''}</div>
  </div>
}

export default Book;
          