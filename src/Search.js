import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class Search extends Component {

    state={
      searchQuery:'',
      searchBooks:[],
    }

    handleChange = (event) => {
      this.setState({
        searchQuery : event.target.value,
      })
      BooksAPI.search(event.target.value)
      .then(resultBooks =>{
        console.log(resultBooks);
        this.setState({
          searchBooks : resultBooks,
        })
      }).catch(err=>console.log(err))
    }


    render() {
        const {searchQuery,searchBooks} = this.state;
        const {addBook} = this.props;

        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className="close-search" >Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" value={searchQuery} onChange={this.handleChange}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                  { searchBooks ? searchBooks.map( (book) =>(
                    <li key={book.id}> 
                      <Book id= {book.id} image={book.imageLinks ? book.imageLinks.smallThumbnail : "" } title={book.title} author={book.authors} addBook={addBook}/> 
                    </li>
                   ) ) : "" 
                  }
              </ol>
            </div>
          </div>
        );
    }
}

export default Search;