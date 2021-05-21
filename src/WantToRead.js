import React from 'react';
import Book from './Book';

function WantToRead (props){
  const {books, addBook} = props;
  return (
      <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.map( (book) =>(
                    book.shelf === "wantToRead" &&(
                    <li key={book.id}>
                        <Book id= {book.id} image={book.imageLinks.smallThumbnail} title={book.title} author={book.authors} shelf={book.shelf} addBook={addBook}/>
                    </li>)
                ))}
              </ol>
            </div>
          </div>
  );
}

export default WantToRead;