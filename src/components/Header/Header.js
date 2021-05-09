import React from 'react'

import { Link } from 'react-router-dom'

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
                    {numItems} items (${total})
                </div>
            </Link>
        </header>
    )
}

export default Header