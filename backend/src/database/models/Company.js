import { DataTypes } from "sequelize";
import sequelize from "../../config/database.js";

const Company = sequelize.define('Company', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    dni: {
        type: DataTypes.STRING,
        allowNull: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: 'companies',
    timestamps: true,
    paranoid: true,
});

export default Company;