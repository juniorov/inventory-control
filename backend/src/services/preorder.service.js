import { PreOrder } from "../database/models/index.js";

export class PreOrderService {
    static async create(preorderData) {
        try{
            const inventory = await Inventory.findByPk(preorderData.batch_id);
            const qty = preorderData.qty;

            if(inventory.current_quantity < qty){
                throw new Error("Not enough inventory, we just have: " + inventory.current_quantity + " items");
            }

            await Inventory.update({
                sold_quantity: inventory.sold_quantity + qty
            }, { where: { id: inventory.id } });

            const preorder = await PreOrder.create(preorderData);

            return preorder;
        }catch(error){
            return { error: true, message: error.message };
        }
    }

    static async show(id) {
        try {
            const preorder = await PreOrder.findByPk(id);
            return preorder;
        }catch(error) {
            console.log(error);
            return {error: true, message: error.message}
        }
    }

    static async update(preorderData) {
        const { id } = preorderData;

        try {
            const preorder = await PreOrder.update(preorderData, { where: { id } });
            return preorder;
        }catch(error) {
            console.log(error);
            return {error: true, message: error.message}
        }
    }

    static async remove(id) {
        try {
            await PreOrder.destroy({ where: { id } });
            return {error: false, message: "PreOrder deleted successfully"};
        }catch(error) {
            console.log(error);
            return {error: true, message: error.errors}
        }
    }
}