import { User } from "../database/models/index.js";

export class UserService{
    static async findByEmail(email) {
        const user = await User.findOne({ where: { email } });
        return user;
    }

    static async create(userData) {
        try {
            const { fullname, password, email, company_id } = userData;

            let user = await User.create({ fullname, password, email, company_id });

            return user;
        } catch (error) {
            return { error: true, message: error.message };
        }
    }
}