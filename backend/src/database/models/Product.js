import { DataTypes } from "sequelize";
import sequelize from "../../config/database.js";

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    name: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
    }
}, {
    tableName: 'products',
    timestamps: true,
});

export default Product;