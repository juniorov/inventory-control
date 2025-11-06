import 'dotenv/config';
import app from './src/app.js';

const PORT = process.env.PORT || 5000;

async function main(){
    try {
        app.listen(PORT, () => {
            console.log(`🚀 Servidor ejecutándose en puerto ${PORT}`);
            console.log(`📊 Ambiente: ${process.env.NODE_ENV || 'development'}`);
        });
    }catch(error) {
        console.log('Unable to connect server', error)
    }
}

main();