import React from 'react'
import { BookStoreServiceConsumer } from '../BookStoreServiceContext'

const withBookStoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <BookStoreServiceConsumer>
                {
                    (BookStoreService) => {
                        return <Wrapped {...props} BookStoreService={BookStoreService} />
                    }
                }
            </BookStoreServiceConsumer>
        )
    }
}

export default withBookStoreService