import React from 'react'

import './BookListItem.css'

const BookListItem = ({ book, onAddToCart }) => {
    const { title, author, price, coverImage } = book
    return (
        <div className="book__list-item">
            <div className="book__cover">
                <img className="book__cover-image" src={coverImage} alt={`cover-${title}`}></img>
            </div>
            <div className="book__details">
                <span className="book__title">{title}</span>
                <div className="book__author">{author}</div>
                <div className="book__price">{price}$</div>
                <button 
                    onClick = {onAddToCart}
                    className="btn btn-info book__cart">Add to Cart</button>
            </div>
        </div>
    )
}

export default BookListItem