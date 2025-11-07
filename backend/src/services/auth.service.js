import { User, Company } from "../database/models/index.js";

export class AuthService {
    static async login(authData) {
        const { email, password } = authData;

        try {
            const user = await User.findOne({ where: { email }, include: [{ model: Company, as: 'company' }] });

            if(!user) {
                throw new Error("User not found");
            }

            const isPasswordValid = await user.validPassword(password);
            if(!isPasswordValid) {
                throw new Error("Invalid password");
            }
            const userWithoutPassword = user.get({ plain: true });

            return userWithoutPassword;
        }catch(error) {
            console.log(error);
            return {error: true, message: error.message};
        }
    }
}