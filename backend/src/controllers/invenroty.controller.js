import { InventoryService } from "../services/inventory.service.js";

export const create = async(req, res) => {
    try {
        const {current_quantity, sold_quantity, batch_id} = req.body;
        const inventory = await InventoryService.create({current_quantity, sold_quantity, batch_id});

        res
            .status(201)
            .json({
                success: true,
                message: "Inventory created successfully",
                inventory,
            });
    }catch(error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

export const show = async(req, res) => {
    try {
        const {id} = req.params;
        const inventory = await InventoryService.show(id);

        res
            .status(201)
            .json({
                success: true,
                message: "Inventory retrieved successfully",
                inventory,
            });
    }catch(error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

export const update = async(req, res) => {
    try {
        const {id} = req.params;
        const {sold_quantity} = req.body;
        await InventoryService.update({id, sold_quantity});

        res
            .status(201)
            .json({
                success: true,
                message: "Inventory updated successfully",
                inventory: {sold_quantity},
            });
    }catch(error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

export const remove = async(req, res) => {
    try {
        const {id} = req.params;
        await InventoryService.remove(id);
        res.status(200).json({success: true, message: "Inventory deleted successfully"});
    }catch(error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}