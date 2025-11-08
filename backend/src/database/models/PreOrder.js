import sequelize from "../../config/database.js";
import { DataTypes } from "sequelize";
import {STATES} from "../../utils/constants.js";

const PreOrder = sequelize.define('PreOrder', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    qty: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    state: {
        type: DataTypes.ENUM,
        values: STATES,
        defaultValue: STATES[0]
    },
    batch_id: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'batches',
            key: 'id'
        }
    },
    customer_id: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'customers',
            key: 'id'
        }
    }
}, {
    tableName: 'preorders',
    timestamps: true,
});

export default PreOrder;