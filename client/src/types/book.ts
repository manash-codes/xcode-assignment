interface Book {
    _id: string,
    title: string,
    description: string
    author: string
}

type BookWithoutId = Omit<Book, '_id'>

export type { Book, BookWithoutId }