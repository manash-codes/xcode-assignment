import { Router } from "express";
import { getBooks, addBook, removeBook } from "../controllers/Book.controller.js";

const router = Router();

router.get('/', getBooks)
router.post('/', addBook)
router.delete('/:id', removeBook)

export default router;