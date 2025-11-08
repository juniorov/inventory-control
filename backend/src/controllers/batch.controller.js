import { BatchService } from "../services/batch.service.js";

export const create = async(req, res) => {
    try {
        const {description, cost, estimate_qty, real_qty, date, company_id} = req.body;
        const batch = await BatchService.create({description, cost, estimate_qty, real_qty, date, company_id});

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
        const {description, cost, estimate_qty, real_qty, date, company_id} = req.body;
        await BatchService.update({id,description, cost, estimate_qty, real_qty, date, company_id});

        res
            .status(201)
            .json({
                success: true,
                message: "Batch created successfully",
                batch: {description, cost, estimate_qty, real_qty, date},
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