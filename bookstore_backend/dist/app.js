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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const BookController = __importStar(require("./controllers/BookController"));
const db_1 = __importDefault(require("./db")); // Import the Sequelize instance from db.ts
//import { initBookModel } from './models/BookModel'; // for mssql db
const app = (0, express_1.default)();
// Connect to the database and synchronize the models
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.default.authenticate(); // Test the database connection
        console.log('Database connection established successfully.');
        // Synchronize the models with the database
        yield db_1.default.sync();
        console.log('Models synchronized with the database.');
        // Initialize the Book model with the Sequelize instance
        //in case of mssql or my sql
        // const BookModel = initBookModel(sequelize);
        // console.log('Book model initialized.');
        //const bookController = new BookController(Book);
    }
    catch (error) {
        console.error('Error connecting to the database:', error);
    }
}))();
// Middleware
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
// BookController Routes
app.get('/buying_books', BookController.getAllBooks);
app.get('/api/books', BookController.getAllBooks);
app.get('/api/books/:id', BookController.getBookById);
app.post('/api/books', BookController.createBook);
app.put('/api/books/:id', BookController.updateBook);
app.delete('/api/books/:id', BookController.deleteBook);
// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the Bookstore Backend API.');
});
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
exports.default = app;
