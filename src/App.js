import React from 'react'
import BookShelf from './components/BookShelf';
import * as BooksAPI from './BooksAPI';
import './App.css'
import { Link, Route } from 'react-router-dom';
import Search from './components/Search';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books:[],
    filtered:[]
  }

  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      this.setState({books:books});
    });
  }

  updateShelf = (book,shelf)=>{
    BooksAPI.update(book,shelf).then((reponce)=>{
      book.shelf=shelf;
      this.setState((currState)=>({
        books:currState.books.filter((bookitem)=>bookitem.id!==book.id).concat([book])
      }))
    })
  }

  searchShelves = (event)=>{
    const searchStr = event.target.value.trim();
    if(searchStr.length){
      BooksAPI.search(searchStr).then((result)=>{
        this.setState({filtered:result.error?[]:result})
      });
    }else{
      this.setState({filtered:[]})
    }
  }

  render() {
    return (
      <div className="app">
        <Route path="/Search" exact render={()=>(<Search books={this.state.filtered} searchAction={this.searchShelves} changeShelf={this.updateShelf} />)} />
        <Route path="/" exact render={()=>(<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf shelfTitle="Currently Reading" shelfBooks={this.state.books.filter((book)=>book.shelf==="currentlyReading")} changeShelf={this.updateShelf} />
                <BookShelf shelfTitle="Want to Read" shelfBooks={this.state.books.filter((book)=>book.shelf==="wantToRead")} changeShelf={this.updateShelf} />
                <BookShelf shelfTitle="Read" shelfBooks={this.state.books.filter((book)=>book.shelf==="read")} changeShelf={this.updateShelf} />
              </div>
            </div>
            <div className="open-search">
              <Link to="/Search" className="open-search">Add a book</Link>
            </div>
          </div>)} />
      </div>
    )
  }
}

export default BooksApp
