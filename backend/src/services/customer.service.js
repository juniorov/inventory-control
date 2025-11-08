import { Customer } from "../database/models/index.js";

export class CustomerService {
    static async create(customerData) {
        try{
            const customer = await Customer.create(customerData);

            return customer;
        }catch(error){
            return { error: true, message: error.message };
        }
    }

    static async show(id) {
        try {
            const customer = await Customer.findByPk(id);
            return customer;
        }catch(error) {
            console.log(error);
            return {error: true, message: error.message}
        }
    }

    static async update(customerData) {
        const { id, dni, name, description } = customerData;

        try {
            const customer = await Customer.update({ dni, name, description }, { where: { id } });
            return customer;
        }catch(error) {
            console.log(error);
            return {error: true, message: error.message}
        }
    }

    static async remove(id) {

        try {
            await Customer.destroy({ where: { id } });
            return {error: false, message: "Customer deleted successfully"};
        }catch(error) {
            console.log(error);
            return {error: true, message: error.errors}
        }
    }
}