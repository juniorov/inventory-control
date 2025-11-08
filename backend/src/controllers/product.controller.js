import { ProductService } from "../services/product.services.js";

export const create = async (req, res) => {
    try {
        const { name, price, company_id } = req.body;
        const product = await ProductService.create({ name, price, company_id });

        res
            .status(201)
            .json({
                success: true,
                message: "Product created successfully",
                product,
            });
    }catch(error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

export const show = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await ProductService.show(id);

        res
            .status(201)
            .json({
                success: true,
                message: "",
                product,
            });
    }catch(error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, company_id } = req.body;
        const product = await ProductService.update({ id, name, price, company_id });

        res
            .status(201)
            .json({
                success: true,
                message: "Product updated successfully",
            });
    }catch(error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

export const remove = async (req, res) => {
    try {
        const { id } = req.params;
        await ProductService.remove(id);

        res
            .status(200)
            .json({ success: true, message: "Product deleted successfully" });
    }catch(error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}