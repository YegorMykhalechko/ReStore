import React, { Component } from 'react'
import { connect } from 'react-redux'


import BookListItem from '../BookListItem'
import withBookStoreService from '../HOC'
import { fetchBooks, bookAddToCart } from '../../actions'
import compose from '../../utils'
import Loader from '../Loader'
import ErrorIndicator from '../ErrorIndicator'

import './BookList.css'

const BookList = ({ books, onAddToCart }) => {
    return (
        <ul className="book__list">
            {
                books.map((book) => {
                    return (
                        <li key={book.id}><BookListItem book={book} onAddToCart={() => onAddToCart(book.id)} /></li>
                    )
                })
            }
        </ul>
    )
}

class BookListContainer extends Component {
    componentDidMount() {
        this.props.fetchBooks()
    }

    render() {
        const { books, loading, error, onAddToCart } = this.props
        if (loading) {
            return (
                <Loader />
            )
        }
        if (error) {
            return (
                <ErrorIndicator />
            )
        }
        return <BookList books={books} onAddToCart={onAddToCart} />
    }
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
    return {
        books,
        loading,
        error
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { BookStoreService } = ownProps
    return {
        fetchBooks: fetchBooks(BookStoreService, dispatch),
        onAddToCart: (id) => dispatch(bookAddToCart(id))
    }
}

export default compose(withBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps))(BookListContainer)


