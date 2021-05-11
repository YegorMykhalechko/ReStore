import React from 'react'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { allBookRemoveFromCart, bookRemoveFromCart, bookAddToCart } from '../../actions'

import './Header.css'

const Header = ({ numItems, total }) => {
    return (
        <header className='book__header row'>
            <Link to='/'>
                <div className='book__logo text-dark'>ReStore</div>
            </Link>
            <Link to='/card'>
                <div className="book-cart">
                    <i className="book-cart__logo fa fa-shopping-cart"></i>
                    {numItems} items ({total}$)
                </div>
            </Link>
        </header>
    )
}

const mapStateToProps = ({shopCart: { orderTotal, orderCount }}) => {
    return {
        numItems: orderCount,
        total: orderTotal
    }
}

const mapDispatchToProps = {
    onIncrease: bookAddToCart,
    onDecrease: bookRemoveFromCart,
    onDelete: allBookRemoveFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)