import { Company } from "../database/models/index.js";

export class CompanyService {
    static async create(companyData) {
        const { dni, name, description } = companyData;

        try {
            let company = await Company.create({
                dni,
                name,
                description
            });

            return company;
        }catch(error) {
            console.log(error);

            return {error: true, message: error.message}
        }
    }

    static async show(id) {
        try {
            const company = await Company.findByPk(id);
            return company;
        }catch(error) {
            console.log(error);
            return {error: true, message: error.message}
        }
    }

    static async update(companyData) {
        const { id, dni, name, description } = companyData;

        try {
            const company = await Company.update({ dni, name, description }, { where: { id } });
            return company;
        }catch(error) {
            console.log(error);
            return {error: true, message: error.message}
        }
    }

    static async remove(id) {

        try {
            await Company.destroy({ where: { id } });
            return {error: false, message: "Company deleted successfully"};
        }catch(error) {
            console.log(error);
            return {error: true, message: error.errors}
        }
    }
}