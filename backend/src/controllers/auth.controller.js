import { AuthService } from "../services/auth.service.js";
import { generateToken, refreshToken } from "../utils/tokenManager.js";

export const login = async(req, res) => {
    try {
        const user = await AuthService.login(req.body);

        const { token, expiresIn } = generateToken(user.id);
        refreshToken(user.id, res);

        res.status(200).json({
            success: true,
            message: "Login successful",
            user: {
                company: user.company,
                email: user.email,
                fullname: user.fullname,
                id: user.id,
            },
            token,
            expiresIn
        });
    }catch(error) {
        console.log('Error when logging in.', error.message);
        res.status(500).json({error: true, message: error.message});
    }
}