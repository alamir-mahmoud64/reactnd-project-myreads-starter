import React from "react";
import Book from "./Book";

function BookShelf(props){
   const {shelfTitle,shelfBooks,changeShelf}=props;
    return <div className="bookshelf">
    <h2 className="bookshelf-title">{shelfTitle}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
          {shelfBooks.map((book)=>(
            <li key={book.id}>
                <Book book={book} changeShelf={changeShelf} />
            </li>
          ))}
      </ol>
    </div>
  </div>
}

export default BookShelf;
                