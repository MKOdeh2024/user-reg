import { DataSource } from "typeorm";
import { user } from "../db/entity/User.js";

const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'user_reg',
  entities: [user],
  synchronize: true,
  logging: true
});

dataSource.initialize().then(() => {
  console.log("Connected to DB!");
}).catch(err => {
  console.error('Failed to connect to DB: ' + err);
});

export default dataSource;