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
const BookRepository = __importStar(require("../repository/BookRepository"));
function getAllBooks() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const books = yield BookRepository.getAllBooks();
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
            const book = yield BookRepository.getBookById(id);
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
            const newBook = yield BookRepository.createBook(bookData);
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
            const updatedBook = yield BookRepository.updateBook(id, bookData);
            if (!updatedBook) {
                return null;
            }
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
            const isDeleted = yield BookRepository.deleteBook(id);
            return isDeleted;
        }
        catch (error) {
            throw new Error('Failed to delete book from the database.');
        }
    });
}
exports.deleteBook = deleteBook;
