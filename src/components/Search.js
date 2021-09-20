import React from "react";
import Book from "./Book";
import { Link } from "react-router-dom";

function Search(props){
   const {books,searchAction,changeShelf}=props;
    return <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
          <input type="text" placeholder="Search by title or author" onChange={searchAction} />

        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books.map((book)=>(
            <li key={book.id}>
                <Book book={book} changeShelf={changeShelf} />
            </li>
          ))}
        </ol>
      </div>
    </div>
}

export default Search;