import { DataTypes, Model, Optional } from 'sequelize';
import  db  from '../db';// for mysql
//import { DB_CONFIG } from '../db.config'; //for SQL server connection

interface BookAttributes {
  id: number;
  title: string;
  description: string;
  discountedRate: number;
  coverImage?: string;
  price: number;
}

interface BookCreationAttributes extends Optional<BookAttributes, 'id'> {}

export class Book extends Model<BookAttributes, BookCreationAttributes> implements BookAttributes {
  public id!: number;
  public title!: string;
  public description!: string;
  public discountedRate!: number;
  public coverImage?: string;
  public price!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
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
    tableName: 'books',
    sequelize: db,
  }
);

