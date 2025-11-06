import sequelize from "../../config/database.js";
import { DataTypes } from "sequelize";

const Inventory = sequelize.define('Inventory', {

}, {
    tableName: 'inventories',
    timestamps: true,
});

export default Inventory;