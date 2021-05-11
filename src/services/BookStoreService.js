export default class BookStoreService {

    data = [{
        id: 1,
        title: 'Java Script for lousers',
        author: 'Human',
        price: 10,
        coverImage: 'https://chubarov.if.ua/images/book_design_2.jpg?crc=502489758'
    },
    {
        id: 2,
        title: 'Java Script for lousers 2',
        author: 'Human',
        price: 20,
        coverImage: 'https://chubarov.if.ua/images/book_design_2.jpg?crc=502489758'
    },
    {
        id: 3,
        title: 'Java Script for lousers 2',
        author: 'Human',
        price: 40,
        coverImage: 'https://chubarov.if.ua/images/book_design_2.jpg?crc=502489758'
    }]

    getBook() {
        return new Promise((res, rej) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    rej(new Error('oops'))
                }
                res(this.data)
            }, 800)
        })
    }

}