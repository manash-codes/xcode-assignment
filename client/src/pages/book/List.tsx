import { useEffect, useState } from "react"
import { Book } from "../../types/book"
import { getBooks, removeBook } from "../../api/route"
import { Link } from "react-router-dom"
import Container from "../../components/Container"


const ListPage = () => {
    const [books, setBooks] = useState<Book[] | []>([])

    useEffect(() => {
        const fetchBooks = async () => {
            const { books } = await getBooks()
            if (books.length !== 0) {
                setBooks(books)
            }
        }
        fetchBooks()
    }, [])

    const handleDelete = async (id: string) => {
        const { err } = await removeBook(id)
        if (!err) {
            const newBooks = books.filter((book) => book._id !== id)
            setBooks(newBooks)
        }
    }

    return (
        <Container>
            <div className="flex justify-between items-center">
                <h1 className="text-3xl text-start">Book List</h1>
                <Link to="/add" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add Book
                </Link>
            </div>

            <ul className="my-4">
                {books?.map((book) => (
                    <li key={book._id} className="px-4 py-2 flex border my-2 rounded mb-2 max-sm:flex-col gap-2">
                        <div className="flex-1">
                            <p className="text-lg">{book.title}</p>
                            <p className="text-gray-500">{book.author}</p>
                            <p className="text-gray-500">{book.description}</p>
                        </div>
                        <button onClick={() => handleDelete(book._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </Container>
    )
}

export default ListPage