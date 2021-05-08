import React, { Component } from 'react'
import { connect } from 'react-redux'


import BookListItem from '../BookListItem'
import withBookStoreService from '../HOC'
import { booksLoaded } from '../../actions'
import compose from '../../utils'

import './BookList.css'

class BookList extends Component {
    componentDidMount() {
        const { BookStoreService } = this.props
        const data = BookStoreService.getBook()
        this.props.booksLoaded(data)
    }

    render() {
        const { books } = this.props
        return (
            <ul className="book__list">
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}><BookListItem book={book} /></li>
                        )
                    })
                }
            </ul>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        books: state.books
    }
}

const mapDispatchToProps = {
    booksLoaded
}


export default compose(withBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps))(BookList)


