import { useNavigate } from "react-router-dom";
import { addBook } from "../../api/route";

const AddPage = () => {
    const router = useNavigate()
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        if (!formData.get('title') || !formData.get('author') || !formData.get('description')) {
            alert('All fields are required');
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
        <div>
            <h1 className="text-3xl text-start">Add Book</h1>
            <form onSubmit={handleSubmit} className="flex flex-col mt-4 p-4 w-1/2 mx-auto ">
                <label className="my-2 text-xl" htmlFor="title">Title</label>
                <input className="mb-2 p-2 border border-gray-300 rounded text-lg" type="text" id="title" name="title" />
                <label className="my-2 text-xl" htmlFor="author">Author</label>
                <input className="mb-2 p-2 border border-gray-300 rounded text-lg" type="text" id="author" name="author" />
                <label className="my-2 text-xl" htmlFor="description">Description</label>
                <input className="mb-2 p-2 border border-gray-300 rounded text-lg" type="text" id="description" name="description" />
                <button type="submit" className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">Add Book</button>
            </form>
        </div>
    )
}

export default AddPage
