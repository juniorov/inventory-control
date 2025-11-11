const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const environtment = {
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "local": {
    "username": PGUSER,
    "password": PGPASSWORD,
    "database": PGDATABASE,
    "host": PGHOST,
    "dialect": "postgres"
  },
  "production": {
    "username": PGUSER,
    "password": PGPASSWORD,
    "database": PGDATABASE,
    "host": PGHOST,
    "dialect": "postgres"
  }
}

export default environtment;