import Batch from './Batch.js';
import Company from './Company.js';
import Customer from './Customer.js';
import Payment from './Payment.js';
import PreOrder from './PreOrder.js';
import Product from './Product.js';
import User from './User.js';
import Inventory from './Inventory.js';

// Company Relations
Company.hasMany(User, {
    foreignKey: 'company_id',
    sourceKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
    as: 'users'
});

Company.hasMany(Batch, {
    foreignKey: 'company_id',
    sourceKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
    as: 'batches'
});

Company.hasMany(Product, {
    foreignKey: 'company_id',
    sourceKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
    as: 'products'
});

Company.hasMany(Customer, {
    foreignKey: 'company_id',
    sourceKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
    as: 'customers'
});

// User Relations
User.belongsTo(Company, {
    foreignKey: 'company_id',
    sourceKey: 'id',
    as: 'company'
});

// Batch Relations
Batch.belongsTo(Company, {
    foreignKey: 'company_id',
    sourceKey: 'id',
});

Batch.hasOne(PreOrder, {
    foreignKey: 'batch_id',
    sourceKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
    as: 'preorders'
});

// Customer
Customer.belongsTo(Company, {
    foreignKey: 'company_id',
    sourceKey: 'id',
});

Customer.hasMany(PreOrder, {
    foreignKey: 'customer_id',
    sourceKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
    as: 'preorders'
});

// Preorder relations
Batch.hasOne(Payment, {
    foreignKey: 'batch_id',
    sourceKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
    as: 'payments'
});

Batch.hasOne(Inventory, {
    foreignKey: 'batch_id',
    sourceKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
    as: 'inventory'
});

PreOrder.belongsTo(Batch, {
    foreignKey: 'batch_id',
    sourceKey: 'id',
});

PreOrder.belongsTo(Customer, {
    foreignKey: 'customer_id',
    sourceKey: 'id',
});

PreOrder.hasOne(Payment, {
    foreignKey: 'preorder_id',
    sourceKey: 'id',
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
    as: 'preorders'
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

Payment.belongsTo(Batch, {
    foreignKey: 'batch_id',
    sourceKey: 'id',
});

// Inventory relations
Inventory.belongsTo(Batch, {
    foreignKey: 'batch_id',
    sourceKey: 'id',
});

export {
    Batch,
    Company,
    Customer,
    Payment,
    PreOrder,
    Product,
    User,
    Inventory,
};