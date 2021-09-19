import React from "react";
import Book from "./Book";

function BookShelf(props){
    return <div className="bookshelf">
    <h2 className="bookshelf-title">{props.shelfTitle}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
          {props.shelfBooks.map((book)=>(
            <li key={book.id}>
                <Book book={book} changeShelf={props.changeShelf} />
            </li>
          ))}
      </ol>
    </div>
  </div>
}

export default BookShelf;
                