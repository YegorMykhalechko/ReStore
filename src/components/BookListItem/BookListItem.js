import React from 'react'

import './BookListItem.css'

const BookListItem = ({ book }) => {
    const { title, author, price, coverImage } = book
    return (
        <div className="book__list-item">
            <div className="book__cover">
                <img className="book__cover-image" src={coverImage} alt={`cover-${title}`}></img>
            </div>
            <div className="book__details">
                <a href="/" className="book__title">{title}</a>
                <div className="book__author">{author}</div>
                <div className="book__price">{price}$</div>
                <button className="btn btn-info book__cart">Add to Cart</button>
            </div>
        </div>
    )
}

export default BookListItem