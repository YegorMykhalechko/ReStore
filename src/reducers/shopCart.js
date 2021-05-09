const updataCartItems = (cartItems, item, idx) => {
    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1),
        ]
    }
    if (idx === -1) {
        return [
            ...cartItems,
            item
        ]
    }
    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1),
    ]
}

const updataCartItem = (book, item, quanity) => {
    if (item) {
        return {
            ...item,
            count: item.count + quanity,
            total: item.total + quanity * book.price
        }
    }
    return {
        id: book.id,
        title: book.title,
        count: 1,
        total: book.price
    }
}

const updataOrder = (state, bookId, quanity) => {
    const { bookList: { books }, shopCart: { cartItems } } = state
    const book = books.find((book) => book.id === bookId)
    const itemIndex = cartItems.findIndex(({ id }) => id === bookId)
    const item = cartItems[itemIndex]

    const newItem = updataCartItem(book, item, quanity)

    return {
        orderTotal: 0,
        cartItems: updataCartItems(cartItems, newItem, itemIndex)
    }
}

const updataShopCart = (state, action) => {
    if (state === undefined) {
        return {
            cartItems: [],
            orderTotal: 0
        }
    }
    switch (action.type) {
        case 'BOOK_ADD_TO_CART':
            return updataOrder(state, action.payload, 1)

        case 'BOOK_REMOVE_FROM_CART':
            return updataOrder(state, action.payload, -1)

        case 'ALL_BOOK_REMOVE_FROM_CART':
            const item = state.shopCart.cartItems.find(({ id }) => id === action.payload)
            return updataOrder(state, action.payload, -item.count)
        default:
            return state.shopCart
    }
}

export default updataShopCart