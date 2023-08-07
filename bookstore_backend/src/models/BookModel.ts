// models/BookModel.ts

import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

// Interface for the Book attributes
interface BookAttributes {
  id: number;
  title: string;
  description: string;
  discountedRate: number;
  coverImage: string | null;
  price: number;
}

// Interface for the Book creation attributes (optional)
interface BookCreationAttributes extends Optional<BookAttributes, 'id'> {}

// Define the Book model
export class BookModel extends Model<BookAttributes, BookCreationAttributes> implements BookAttributes {
  public id!: number;
  public title!: string;
  public description!: string;
  public discountedRate!: number;
  public coverImage!: string | null;
  public price!: number;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Export the Book model and initialize it with Sequelize
export const initBookModel = (sequelize: Sequelize): void => {
  BookModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      discountedRate: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 99,
        },
      },
      coverImage: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'books', // Specify the table name in the database
     timestamps: true,
     underscored: true,
    }
  );
};
