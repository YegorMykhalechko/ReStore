import React from 'react'
import { BookStoreServiceConsumer } from '../BookStoreServiceContext'

const withBookStoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <BookStoreServiceConsumer>
                {
                    (BookStoreService) => {
                        return <Wrapped {...props} BookStoreService={bookStoreService} />
                    }
                }
            </BookStoreServiceConsumer>
        )
    }
}

export default withBookStoreService