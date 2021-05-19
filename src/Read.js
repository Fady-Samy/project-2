import React, { Component } from 'react';
import Book from './Book';

class Read extends Component {
    render() {
      const {books,addBook} = this.props;
        return (
            <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {books.map( (book) =>(
                          book.shelf === "read" &&(
                          <li key={book.id}>
                              <Book id= {book.id} image={book.imageLinks.smallThumbnail} title={book.title} author={book.authors} shelf={book.shelf} addBook={addBook}/>
                          </li>)
                      ))}
                    </ol>
                  </div>
                </div>
        );
    }
}

export default Read;