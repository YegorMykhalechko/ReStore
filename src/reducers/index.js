import updataBookList from './bookList'
import updataShopCart from './shopCart'

const reducer = (state, action) => {
    return {
        bookList: updataBookList(state, action),
        shopCart: updataShopCart(state, action)
    }
}

export default reducer