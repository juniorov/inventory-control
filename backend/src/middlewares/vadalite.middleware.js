import {validationResult, body, param} from 'express-validator';
import { User } from '../database/models/index.js';

export const validateResult = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }
    next();
}

export const validateLogin = [
    body('email')
        .trim()
        .isEmail()
        .normalizeEmail()
        .custom(async (value) => {
            const user = await User.findOne({ where: { email: value } });
            if(!user) {
                throw new Error("Email is not registered, try with another one.");
            }
            return value;
        }),
    body('password')
        .trim()
        .notEmpty().withMessage('Password is required'),
    validateResult
];

export const validateCompany = [
    body('dni')
        .trim(),
    body('name')
        .trim()
        .notEmpty().withMessage('Nombre de la empresa es requerido'),
    body('description')
        .trim(),
    validateResult
];

export const validateIdParam = [
    param("id", "Formato ID incorrecto")
        .not().isEmpty()
        .trim()
        .isUUID(4)
        .escape(),
    validateResult,
];

export const validateUser = [
    body('fullname')
        .trim(),
    body('email')
        .trim()
        .isEmail()
        .normalizeEmail()
        .custom(async (value) => {
            const user = await User.findOne({ where: { email: value } });
            if(user) {
                throw new Error("Email is registered, try with another one.");
            }
            return value;
        }),
    body('password', "Formato Password incorrecto")
        .trim()
        .isLength({min: 6})
        .withMessage('Min length is 6'),
    validateResult
];

export const validateCustomer = [
    body('phone')
        .trim(),
    body('name')
        .trim()
        .notEmpty().withMessage('Nombre del cliente es requerido'),
    body('address')
        .trim(),
    body('company_id')
        .trim()
        .isUUID(4),
    validateResult
];

export const validateProduct = [
    body('name')
        .trim()
        .notEmpty().withMessage('Nombre del producto es requerido'),
    body('price')
        .trim()
        .isFloat(),
    body('company_id')
        .trim()
        .isUUID(4),
    validateResult
];

export const validateBatch = [
    body('description')
        .trim()
        .notEmpty(),
    body('cost')
        .trim()
        .notEmpty()
        .isFloat(),
    body('estimate_qty')
        .trim()
        .notEmpty()
        .isNumeric(),
    body('real_qty')
        .trim()
        .notEmpty()
        .isNumeric(),
    body('date')
        .trim()
        .notEmpty()
        .isDate(),
    body('company_id')
        .trim()
        .isUUID(4),
    validateResult
];

export const validatePreOrder = [
    body('state')
        .trim()
        .notEmpty(),
    body('qty')
        .trim()
        .notEmpty()
        .isNumeric(),
    body('batch_id')
        .trim()
        .isUUID(4),
    body('customer_id')
        .trim()
        .isUUID(4),
    validateResult
];