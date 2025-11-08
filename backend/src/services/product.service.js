import { Product } from "../database/models/index.js";

export class ProductService {

    static async create(productData) {
        try {
            const product = await Product.create(productData);

            return product;
        }catch(error) {
            console.log(error);
            return {error: true, message: error.message}
        }
    }

    static async show(id) {
        try {
            const product = await Product.findByPk(id);

            return product;
        }catch(error) {
            console.log(error);
            return {error: true, message: error.message}
        }
    }

    static async update(productData) {
        const { id, name, price } = productData;

        try {
            const product = await Product.update({ name, price }, { where: { id } });
            return product;
        }catch(error) {
            console.log(error);
            return {error: true, message: error.message}
        }
    }

    static async remove(id) {

        try {
            await Product.destroy({ where: { id } });
            return {error: false, message: "Product deleted successfully"};
        }catch(error) {
            console.log(error);
            return {error: true, message: error.errors}
        }
    }
}