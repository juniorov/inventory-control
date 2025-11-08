import { DataTypes } from "sequelize";
import bcrypt from 'bcryptjs';
import sequelize from "../../config/database.js";

const User = sequelize.define('User', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    fullname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            const hashedPassword = bcrypt.hashSync(value, 10);
            this.setDataValue('password', hashedPassword)
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        },
        set(value) {
            this.setDataValue('email', value.toLowerCase());
        }
    },
    is_invite: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
    },
    invited_code: {
        type: DataTypes.STRING,
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
    tableName: 'users',
    timestamps: true,
    paranoid: true,
});

User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

export default User;