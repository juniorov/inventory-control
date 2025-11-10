import sequelize from "../../config/database.js";
import { DataTypes } from "sequelize";

const Inventory = sequelize.define('Inventory', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    current_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    sold_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    batch_id: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'batches',
            key: 'id'
        }
    }
}, {
    tableName: 'inventories',
    timestamps: true,
    paranoid: true,
});


export default Inventory;