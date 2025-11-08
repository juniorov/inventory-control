import express from 'express';
import cors from 'cors';
import sequelize from './config/database.js';
import authRoutes from './routes/auth.routes.js';
import companyRoutes from './routes/company.routes.js';
import customerRoutes from './routes/customer.routes.js';

const app = express();

// try {
//     // sequelize.sync({ alter: true});
//     sequelize.sync({ force: true});
// }catch(error) {
//     console.log("error updating database", error)
// }

//Middlewares
app.use(cors());
app.use(express.json());

app.use('/api/v1', authRoutes);
app.use('/api/v1', companyRoutes);
app.use('/api/v1', customerRoutes);

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Middleware de errores global
app.use((error, req, res, next) => {
    console.error('Error:', error);
    res.status(500).json({
        error: 'Error interno del servidor',
        message: error.message
    });
});

export default app;