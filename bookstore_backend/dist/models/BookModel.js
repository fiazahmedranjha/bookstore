"use strict";
// models/BookModel.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.initBookModel = exports.BookModel = void 0;
const sequelize_1 = require("sequelize");
// Define the Book model
class BookModel extends sequelize_1.Model {
}
exports.BookModel = BookModel;
// Export the Book model and initialize it with Sequelize
const initBookModel = (sequelize) => {
    BookModel.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        discountedRate: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 99,
            },
        },
        coverImage: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        price: {
            type: sequelize_1.DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
    }, {
        sequelize,
        tableName: 'books',
        timestamps: true,
        underscored: true,
    });
};
exports.initBookModel = initBookModel;
