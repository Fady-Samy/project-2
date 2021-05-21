import React from 'react';
import CurrentlyReading from './CurrentlyReading';
import WantToRead from './WantToRead';
import Read from './Read';
import Search from './Search';
import * as BooksAPI from './BooksAPI';
import {Link, Route} from 'react-router-dom';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books:[]
  }

  //Getting the initial data from API
  componentDidMount(){
    BooksAPI.getAll()
     .then(result =>{
       this.setState(()=>({
         books: result,
       }))
     });
 }

  //Adding New Books from search / Changing Shelf
  addBook = (bookID,bookIMG,bookTitle,bookAuthor,shelf) => {
    //If book exist then update the shelf only
    const bookExist = this.checkBook(bookID);
    if(bookExist){
      console.log("Old book");
      BooksAPI.update(bookExist,shelf)
          .then(updatedBooks =>(
            console.log(updatedBooks)
          ))
    }
    //Else it is a new book then add to the state
    else{
      console.log("New book");
      var newBook= 
      { id: bookID,
        imageLinks: {smallThumbnail:bookIMG},
        title: bookTitle,
        authors: bookAuthor,
        shelf: shelf
      };
      this.setState((currentState)=>({
        books: currentState.books.concat(newBook)
      }))
      BooksAPI.update(newBook,newBook.shelf)
      .then(updatedBooks =>(
        console.log(updatedBooks)
      ))
    };
     
  }

  //Check if added book exist
  checkBook = (id) =>{
    const {books} = this.state;
    var bookFound=false;
    books.map(book=>(
      book.id===id &&(
        bookFound = book)
    ));
    return bookFound;
  }

  render() {
    return (
      <div className="app">
         <Route exact path='/' render={()=> (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
              <div>
                <CurrentlyReading books={this.state.books} addBook={this.addBook}/>
                <WantToRead books={this.state.books} addBook={this.addBook}/>
                <Read books={this.state.books} addBook={this.addBook}/>
              </div>
          </div>
          <div className="open-search">
            <Link className="link" to='/search'>Add a book</Link>
          </div>
        </div>)}/>
        <Route exact path="/search" render={()=>(
            <Search books={this.state.books} addBook={this.addBook}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
