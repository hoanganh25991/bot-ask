import fs from "fs"
const _ = console.log

_("[INFO] Store Env")
const {
  DB_HOST: host = "localhost",
  DB_PORT: port = 3306,
  DB_NAME: database = "gobear",
  DB_USER: username = "gobear",
  DB_PASS: password = "dOey8JPc",
  TIMEZONE: timezone = "+08:00"
} = process.env

const mysqlCnf = { host, port, database, username, password, timezone }
fs.writeFileSync("../.env", JSON.stringify(mysqlCnf))
