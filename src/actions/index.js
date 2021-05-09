const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_LOADED',
        payload: newBooks
    }
}

const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_SUCCESS'
    }
}

const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
}

export const bookAddToCart = (bookId) => {
    return{
        type: 'BOOK_ADD_TO_CART',
        payload: bookId
    }
}

export const bookRemoveFromCart = (bookId) => {
    return{
        type: 'BOOK_REMOVE_FROM_CART',
        payload: bookId
    }
}

export const allBookRemoveFromCart = (bookId) => {
    return{
        type: 'ALL_BOOK_REMOVE_FROM_CART',
        payload: bookId
    }
}

const fetchBooks = (BookStoreService, dispatch) => ()=> {
    dispatch(booksRequested())
    BookStoreService.getBook()
        .then((data) => {
            dispatch(booksLoaded(data))
        })
        .catch((err) => {
            dispatch(booksError(err))
        })
}


export {fetchBooks}