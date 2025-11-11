import { BatchService } from "../services/batch.service.js";

export const create = async(req, res) => {
    try {
        console.table(req.body);
        const {name, ingredients, cost, estimate_qty, real_qty, date, company_id, product_id} = req.body;
        const batch = await BatchService.create({name, ingredients, cost, estimate_qty, real_qty, date, company_id, product_id});

        res
            .status(201)
            .json({
                success: true,
                message: "Batch created successfully",
                batch,
            });
    }catch(error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

export const show = async(req, res) => {
    try {
        const {id} = req.params;
        const batch = await BatchService.show(id);

        res
            .status(201)
            .json({
                success: true,
                message: "Batch retrieved successfully",
                batch,
            });
    }catch(error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

export const update = async(req, res) => {
    try {
        const {id} = req.params;
        const {name,ingredients, cost, estimate_qty, real_qty, date, company_id, product_id} = req.body;
        await BatchService.update({id,name,ingredients, cost, estimate_qty, real_qty, date, company_id, product_id});

        res
            .status(201)
            .json({
                success: true,
                message: "Batch created successfully",
                batch: {name,ingredients, cost, estimate_qty, real_qty, date, company_id, product_id},
            });
    }catch(error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

export const remove = async(req, res) => {
    try {
        const {id} = req.params;
        await BatchService.remove(id);
        res.status(200).json({success: true, message: "Batch deleted successfully"});
    }catch(error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}