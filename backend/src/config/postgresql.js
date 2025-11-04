import 'dotenv/config';

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
const url = `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require&channel_binding=require`;