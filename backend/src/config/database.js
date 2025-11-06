import 'dotenv/config';
import { Sequelize } from 'sequelize';

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
const url = `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require&channel_binding=require`;
const sequelize = new Sequelize(url);

export default sequelize;