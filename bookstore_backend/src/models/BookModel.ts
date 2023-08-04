import { DataTypes, Model } from 'sequelize';
import db  from '../db';

interface BookAttributes {
  id: number;
  title: string;
  description: string;
  discountedRate: number;
  coverImage?: string;
  price: number;
}

class BookModel extends Model<BookAttributes> implements BookAttributes {
  public id!: number;
  public title!: string;
  public description!: string;
  public discountedRate!: number;
  public coverImage?: string;
  public price!: number;
}

BookModel.init(
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

export { BookModel };
