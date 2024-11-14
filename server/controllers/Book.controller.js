import Book from "../models/Book.model.js";

const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        return res.status(200).json({ books, message: "Get books successfully" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ err, message: "Failed to get books" });
    }
}

const addBook = async (req, res) => {
    try {
        const { title, author, description } = req.body;
        if (!title || !author || !description) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const book = new Book({ title, author, description });
        await book.save();
        return res.status(200).json({ book, message: "Add book successfully" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ err, message: "Failed to add book" });
    }
}

const removeBook = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "Id is required" });
        }
        await Book.findByIdAndDelete(id);
        return res.status(200).json({ message: "Remove book successfully" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ err, message: "Failed to remove book" });
    }
}

export { getBooks, addBook, removeBook };