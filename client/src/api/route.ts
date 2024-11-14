import { BookWithoutId } from "../types/book"

const URL = import.meta.env.NODE_API || 'http://localhost:5050'

const getBooks = async () => {
    const res = await fetch(`${URL}/api/book`)
    return res.json()
}

const addBook = async (book: BookWithoutId) => {
    const res = await fetch(`${URL}/api/book`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    })
    return res.json()
}

const removeBook = async (id: string) => {
    const res = await fetch(`${URL}/api/book/${id}`, {
        method: 'DELETE'
    })
    return res.json()
}

export { getBooks, addBook, removeBook }