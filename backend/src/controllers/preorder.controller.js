import { PreOrderService } from "../services/preorder.service.js";

export const create = async (req, res) => {
    try {
        const { state, qty, batch_id, customer_id } = req.body;

        const preorder = await PreOrderService.create({
            state,
            qty,
            batch_id,
            customer_id,
        });

        if(preorder.error){
            throw new Error("Error to create preorder.");
        }

        res
            .status(201)
            .json({
                success: true,
                message: "PreOrder created successfully",
                preorder,
            });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const show = async (req, res) => {
    try {
        const { id } = req.params;
        const preorder = await PreOrderService.show(id);

        res.status(200).json({
            success: true,
            message: "",
            preorder,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { state, qty, batch_id, customer_id } = req.body;
        await PreOrderService.update({ id, state, qty, batch_id, customer_id });

        res.status(200).json({
            success: true,
            message: "PreOrder updated successfully",
            preorder: { state, qty, batch_id, customer_id },
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const remove = async (req, res) => {
    try {
        const { id } = req.params;
        await PreOrderService.remove(id);
        res
            .status(200)
            .json({ success: true, message: "PreOrder deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};