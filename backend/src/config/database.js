import 'dotenv/config';
import { Sequelize } from 'sequelize';
import environtment from './environment.js';

const { APP_ENV } = process.env;

const sequelize = new Sequelize(environtment[APP_ENV].PGDATABASE, environtment[APP_ENV].PGUSER, environtment[APP_ENV].PGPASSWORD, {
    host: environtment[APP_ENV].PGHOST,
    dialect: 'postgres'
});

export default sequelize;