"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.createBook = exports.getBookById = exports.getAllBooks = void 0;
const BookService = __importStar(require("../services/BookService"));
function getAllBooks(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const books = yield BookService.getAllBooks();
            res.status(200).json(books);
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to fetch all books from the database.' });
        }
    });
}
exports.getAllBooks = getAllBooks;
function getBookById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id)) {
            res.status(400).json({ error: 'Invalid book ID.' });
            return;
        }
        try {
            const book = yield BookService.getBookById(id);
            if (!book) {
                res.status(404).json({ error: 'Book not found.' });
                return;
            }
            res.status(200).json(book);
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to fetch book from the database.' });
        }
    });
}
exports.getBookById = getBookById;
function createBook(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { title, description, discountedRate, coverImage, price } = req.body;
        console.log("req.body", req.body);
        if (!title || !description || !discountedRate || !price) {
            res.status(400).json({ error: 'Title, description, discountedRate, and price are required.' });
            return;
        }
        try {
            console.log("req.body", req.body);
            const newBook = yield BookService.createBook(req.body);
            res.status(201).json(newBook);
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to create book in the database.' });
        }
    });
}
exports.createBook = createBook;
function updateBook(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id)) {
            res.status(400).json({ error: 'Invalid book ID.' });
            return;
        }
        const { title, description, discountedRate, coverImage, price } = req.body;
        if (!title || !description || !discountedRate || !price) {
            res.status(400).json({ error: 'Title, description, discountedRate, and price are required.' });
            return;
        }
        try {
            const updatedBook = yield BookService.updateBook(id, req.body);
            if (!updatedBook) {
                res.status(404).json({ error: 'Book not found.' });
                return;
            }
            res.status(200).json(updatedBook);
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to update book in the database.' });
        }
    });
}
exports.updateBook = updateBook;
function deleteBook(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id)) {
            res.status(400).json({ error: 'Invalid book ID.' });
            return;
        }
        try {
            const isDeleted = yield BookService.deleteBook(id);
            if (!isDeleted) {
                res.status(404).json({ error: 'Book not found.' });
                return;
            }
            res.status(200).json({ message: 'Book deleted successfully.' });
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to delete book from the database.' });
        }
    });
}
exports.deleteBook = deleteBook;
