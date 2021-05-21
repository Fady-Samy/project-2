import React, { Component } from 'react';

class Book extends Component {
    handleShelf = (event) =>{
        const {id,image,title,author} = this.props;
        const choosenShelf = event.target.value;
        this.props.addBook(id,image,title,author,choosenShelf);
    }
    render() {
        const {image,title,author,shelf} = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${image}")` }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={this.handleShelf} value={shelf ? shelf : 'none'}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{author}</div>
            </div>
        );
    }
}

export default Book;