import { DataTypes } from "sequelize";
import sequelize from "../../config/database.js";

const Customer = sequelize.define('Customer', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    name: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true,
        set(value) {
            this.setDataValue('phone', value.replace("-", ""))
        }
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: true,
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
    tableName: 'customers',
    timestamps: true,
});

export default Customer;