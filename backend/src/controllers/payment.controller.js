import { PaymentService } from "../services/payment.service.js";

export const create = async (req, res) => {
    try {
        const { amount, type_payment, batch_id, preorder_id, date } = req.body;
        const payment = await PaymentService.create({ amount, type_payment, batch_id, preorder_id, date });

        if(payment.error) {
            throw new Error("Error to insert or update on table");
        }

        res
            .status(201)
            .json({
                success: true,
                message: "Payment created successfully",
                payment,
            });
    }catch(error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

export const show = async (req, res) => {
    try {
        const { id } = req.params;
        const payment = await PaymentService.show(id);

        res
            .status(200)
            .json({
                success: true,
                message: "",
                payment,
            });
    }catch(error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { amount, type_payment, batch_id, preorder_id, date } = req.body;
        await PaymentService.update({ id, amount, type_payment, batch_id, preorder_id, date });

        res
            .status(201)
            .json({
                success: true,
                message: "Payment updated successfully",
                payment: { id, amount, type_payment, batch_id, preorder_id, date }
            });
    }catch(error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

export const remove = async (req, res) => {
    try {
        const { id } = req.params;
        await PaymentService.remove(id);

        res
            .status(200)
            .json({ success: true, message: "Payment deleted successfully" });
    }catch(error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}