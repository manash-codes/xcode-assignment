import { Link, useNavigate } from "react-router-dom";
import { addBook } from "../../api/route";
import Container from "../../components/Container";

const AddPage = () => {
    const router = useNavigate()
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);

        if (!formData.get('title') || !formData.get('author') || !formData.get('description')) {
            alert('All fields are required');
            return
        }

        const title = formData.get('title') as string;
        const author = formData.get('author') as string;
        const description = formData.get('description') as string;

        const response = await addBook({ title, author, description });
        if (!response.err) {
            return router('/')
        }
    }

    return (
        <Container>
            <div className="flex justify-between items-center">
                <h1 className="text-3xl text-start">Add Book</h1>
                <Link to="/" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded max-sm:text-md ">
                    Back to List
                </Link>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col items-stretch mt-4 mx-auto max-sm:gap-2 md:w-1/2">
                <label className="text-lg" htmlFor="title">Title</label>
                <input className="mb-2 p-2 border border-gray-300 rounded text-lg sm:text-md" type="text" id="title" name="title" />
                <label className="text-lg" htmlFor="author">Author</label>
                <input className="mb-2 p-2 border border-gray-300 rounded text-lg sm:text-md" type="text" id="author" name="author" />
                <label className="text-lg" htmlFor="description">Description</label>
                <input className="mb-2 p-2 border border-gray-300 rounded text-lg sm:text-md" type="text" id="description" name="description" />
                <button type="submit" className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">Add Book</button>
            </form>
        </Container>
    )
}

export default AddPage
