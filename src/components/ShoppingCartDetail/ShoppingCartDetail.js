import React from 'react'
import { connect } from 'react-redux'

import { allBookRemoveFromCart, bookRemoveFromCart, bookAddToCart } from '../../actions'

import './ShoppingCartDetail.css'

const ShoppingCartDetail = ({ items, total, onIncrease, onDecrease, onDelete }) => {
    const renderRow = (item, idx) => {
        const { id, title, count, total } = item
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>{total}$</td>
                <td>
                    <button
                        onClick={() => onDelete(id)}
                        className="btn btn-outline-danger btn-sm float-right cart__btn">
                        <i className="fa fa-trash-o" />
                    </button>
                    <button
                        onClick={() => onIncrease(id)}
                        className="btn btn-outline-success btn-sm float-right cart__btn">
                        <i className="fa fa-plus-circle" />
                    </button>
                    <button
                        onClick={() => onDecrease(id)}
                        className="btn btn-outline-warning btn-sm float-right cart__btn">
                        <i className="fa fa-minus-circle" />
                    </button>
                </td>
            </tr>
        )
    }
    return (
        <div className="cart__detail">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(renderRow)}
                </tbody>
            </table>

            <div className="cart__total">
                Total: {total}$
            </div>
        </div>
    )
}

const mapStateToProps = ({shopCart: { cartItems, orderTotal }}) => {
    return {
        items: cartItems,
        total: orderTotal
    }
}

const mapDispatchToProps = {
        onIncrease: bookAddToCart,
        onDecrease: bookRemoveFromCart,
        onDelete: allBookRemoveFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartDetail)