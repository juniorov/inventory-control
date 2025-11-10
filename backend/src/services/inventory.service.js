import { Inventory } from "../database/models/index.js";

export class InventoryService {
    static async create(inventoryData) {
        try {
            const inventory = await Inventory.create(inventoryData);

            return inventory;
        } catch(error) {
            console.log(error);
            return {error: true, message: error.message}
        }
    }

    static async show(id) {
        try {
            const inventory = await Inventory.findByPk(id);

            return inventory;
        } catch(error) {
            console.log(error);
            return {error: true, message: error.message}
        }
    }

    static async update(inventoryData) {
        try {
            const {id, sold_quantity} = inventoryData;
            const inventory = await Inventory.update({sold_quantity}, { where: { id } });

            return inventory;
        } catch(error) {
            console.log(error);
            return {error: true, message: error.message}
        }
    }

    static async remove(id) {
        try {
            await Inventory.destroy({ where: { id } });
            return {error: false, message: "Inventory deleted successfully"};
        }catch(error) {
            console.log(error);
            return {error: true, message: error.errors}
        }
    }
}