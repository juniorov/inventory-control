import { CompanyService } from "../services/company.service.js";
import { UserService } from "../services/user.service.js";

export const create = async (req, res) => {
    try {
        const {dni, name, description} = req.body;
        const {email, password, fullname} = req.body;
        const company = await CompanyService.create({ dni, name, description});

        const user = await UserService.create({email, password, fullname, company_id : company.id})

        res.status(201).json({success: true, message: "Company created successfully", company, user});
    }catch(error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

export const show = async (req, res) => {
    try {
        const {id} = req.params;
        const company = await CompanyService.show(id);
        res.status(200).json({success: true, message: "Company retrieved successfully", company});
    }catch(error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

export const update = async (req, res) => {
    try {
        const {id} = req.params;
        const {dni, name, description} = req.body;
        await CompanyService.update({id, dni, name, description});

        res.status(200).json({success: true, message: "Company updated successfully", company: {id, dni, name, description}});
    }catch(error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

export const remove = async (req, res) => {
    try {
        const {id} = req.params;
        await CompanyService.remove(id);
        res.status(200).json({success: true, message: "Company deleted successfully"});
    }catch(error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}