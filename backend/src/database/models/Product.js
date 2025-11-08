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
    },
    company_id: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'companies',
            key: 'id'
        }
    }
}, {
    tableName: 'products',
    timestamps: true,
    paranoid: true,
});

export default Product;