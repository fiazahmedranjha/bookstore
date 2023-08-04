"use strict";
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
const Book_1 = require("../entity/Book");
function getAllBooks() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const books = yield Book_1.Book.findAll();
            return books;
        }
        catch (error) {
            throw new Error('Failed to fetch all books from the database.');
        }
    });
}
exports.getAllBooks = getAllBooks;
function getBookById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const book = yield Book_1.Book.findByPk(id);
            return book;
        }
        catch (error) {
            throw new Error('Failed to fetch book from the database.');
        }
    });
}
exports.getBookById = getBookById;
function createBook(bookData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newBook = yield Book_1.Book.create(bookData);
            return newBook;
        }
        catch (error) {
            throw new Error('Failed to create book in the database.');
        }
    });
}
exports.createBook = createBook;
function updateBook(id, bookData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const [affectedCount] = yield Book_1.Book.update(bookData, { where: { id } });
            if (affectedCount === 0) {
                return null;
            }
            const updatedBook = yield Book_1.Book.findByPk(id);
            return updatedBook;
        }
        catch (error) {
            throw new Error('Failed to update book in the database.');
        }
    });
}
exports.updateBook = updateBook;
function deleteBook(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const affectedCount = yield Book_1.Book.destroy({ where: { id } });
            if (affectedCount === 0) {
                return false;
            }
            return true;
        }
        catch (error) {
            throw new Error('Failed to delete book from the database.');
        }
    });
}
exports.deleteBook = deleteBook;
