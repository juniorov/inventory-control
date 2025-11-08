import { CustomerService } from "../services/customer.service.js";

export const create = async (req, res) => {
    try {
        const { name, phone, address, company_id } = req.body;

        const customer = await CustomerService.create({
            name,
            phone,
            address,
            company_id,
        });

        if(customer.error) {
            throw new Error("Error to insert or update on table");
        }

        res
            .status(201)
            .json({
                success: true,
                message: "Customer created successfully",
                customer,
            });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const show = async (req, res) => {
    try {
        const { id } = req.params;
        const customer = await CustomerService.show(id);

        res.status(200).json({
            success: true,
            message: "",
            customer,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, phone, address, company_id } = req.body;
        await CustomerService.update({ id, name, phone, address, company_id });

        res.status(200).json({
            success: true,
            message: "Customer updated successfully",
            customer: { name, phone, address, company_id },
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const remove = async (req, res) => {
    try {
        const { id } = req.params;
        await CustomerService.remove(id);
        res
            .status(200)
            .json({ success: true, message: "Customer deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};