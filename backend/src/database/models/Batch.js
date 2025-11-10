import { DataTypes } from "sequelize";
import sequelize from "../../config/database.js";

const Batch = sequelize.define('Batch', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    cost: {
        type: DataTypes.JSONB,
        defaultValue: 0
    },
    estimate_qty: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    real_qty: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'batches',
    timestamps: true,
    paranoid: true,
});

export default Batch;