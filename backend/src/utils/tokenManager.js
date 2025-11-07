import jwt from 'jsonwebtoken';
import 'dotenv/config';

let { JWT_SECRET, JWT_REFRESH, APP_ENV } = process.env;
export const generateToken = (uid) => {
    try{
        const expiresIn = 60 * 15;
        const token = jwt.sign({uid}, JWT_SECRET, { expiresIn });

        return { token, expiresIn };
    }catch(error) {
        console.log(error);
    }
}

export const refreshToken = (uid, res) => {
    try{
        const expiresIn = 60 * 60 * 24 * 30;
        const refreshToken = jwt.sign({uid}, JWT_REFRESH, { expiresIn });

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: APP_ENV != 'production',
            expires: new Date(Date.now() + expiresIn * 1000),
        });
    }catch(error) {
        console.log(error);
    }
}