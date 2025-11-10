import { Batch, Inventory } from "../database/models/index.js";

export class BatchService {
    static async create(batchData) {
        try {
            const batch = await Batch.create(batchData);

            // Inicializar inventario
            await Inventory.create({
                batch_id: batch.id,
                current_quantity: batch.real_qty,
                sold_quantity: 0
            });

            return batch;
        } catch(error) {
            console.log(error);
            return {error: true, message: error.message}
        }
    }

    static async show(id) {
        try {
            const batch = await Batch.findByPk(id);

            return batch;
        } catch(error) {
            console.log(error);
            return {error: true, message: error.message}
        }
    }

    static async update(batchData) {
        try {
            const {id, description, cost, estimate_qty, real_qty, date} = batchData;
            const batch = await Batch.update({description, cost, estimate_qty, real_qty, date}, { where: { id } });

            return batch;
        } catch(error) {
            console.log(error);
            return {error: true, message: error.message}
        }
    }

    static async remove(id) {
        try {
            await Batch.destroy({ where: { id } });
            return {error: false, message: "Batch deleted successfully"};
        }catch(error) {
            console.log(error);
            return {error: true, message: error.errors}
        }
    }
}