import Batch from './Batch.js';
import Company from './Company.js';
import Customer from './Customer.js';
import Inventory from './Inventory.js';
import Payment from './Payment.js';
import PreOrder from './PreOrder.js';
import Product from './Product.js';
import User from './User.js';

// Company Relations
Company.hasMany(User, {
    foreignKey: 'company_id',
    sourceKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
});

Company.hasMany(Batch, {
    foreignKey: 'company_id',
    sourceKey: 'id',
});

Company.hasMany(Product, {
    foreignKey: 'compay_id',
    sourceKey: 'id',
});

Company.hasMany(Customer, {
    foreignKey: 'company_id',
    sourceKey: 'id',
});

// User Relations
User.belongsTo(Company, {
    foreignKey: 'company_id',
    sourceKey: 'id',
});

// Batch Relations
Batch.belongsTo(Company, {
    foreignKey: 'company_id',
    sourceKey: 'id',
});

Batch.hasOne(PreOrder, {
    foreignKey: 'batch_id',
    sourceKey: 'id',
});

// Customer
Customer.belongsTo(Company, {
    foreignKey: 'company_id',
    sourceKey: 'id',
});

Customer.hasMany(PreOrder, {
    foreignKey: 'customer_id',
    sourceKey: 'id',
});

// Preorder relations
Batch.hasOne(Payment, {
    foreignKey: 'batch_id',
    sourceKey: 'id',
});

PreOrder.belongsTo(Batch, {
    foreignKey: 'batch_id',
    sourceKey: 'id',
});

PreOrder.belongsTo(Customer, {
    foreignKey: 'customer_id',
    sourceKey: 'id',
});

// Product Relations
Product.belongsTo(Company, {
    foreignKey: 'company_id',
    sourceKey: 'id',
});

// Payment reltions
Payment.belongsTo(PreOrder, {
    foreignKey: 'preorder_id',
    sourceKey: 'id',
});

export {
    Batch,
    Company,
    Customer,
    Inventory,
    Payment,
    PreOrder,
    Product,
    User
};