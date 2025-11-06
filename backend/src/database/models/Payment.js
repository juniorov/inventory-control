import sequelize from "../../config/database.js";
import { DataTypes } from "sequelize";
import {TYPE_PAYMENTS} from '../../utils/constants.js';

const Payment = sequelize.define('Payment', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    amount: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
    },
    type_payment: {
        type: DataTypes.ENUM,
        values: TYPE_PAYMENTS,
        defaultValue: TYPE_PAYMENTS[0],
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'payments',
    timestamps: true,
});

export default Payment;