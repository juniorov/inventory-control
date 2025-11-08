import { Payment } from "../database/models/index.js";

export class PaymentService {

    static async create(paymentData) {
        try {
            const payment = await Payment.create(paymentData);

            return payment;
        }catch(error) {
            console.log(error);
            return {error: true, message: error.message}
        }
    }

    static async show(id) {
        try {
            const payment = await Payment.findByPk(id);

            return payment;
        }catch(error) {
            console.log(error);
            return {error: true, message: error.message}
        }
    }

    static async update(paymentData) {
        const { id } = paymentData;

        try {
            const payment = await Payment.update(paymentData, { where: { id } });
            return payment;
        }catch(error) {
            console.log(error);
            return {error: true, message: error.message}
        }
    }

    static async remove(id) {

        try {
            await Payment.destroy({ where: { id } });
            return {error: false, message: "Payment deleted successfully"};
        }catch(error) {
            console.log(error);
            return {error: true, message: error.errors}
        }
    }
}