"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var User_js_1 = require("./entity/User.js");
var dataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'user_reg',
    entities: [User_js_1.User],
    migrations: ['./**/migration/*.ts'],
    synchronize: true,
    logging: true
});
dataSource.initialize().then(function () {
    console.log("Connected to DB!");
}).catch(function (err) {
    console.error('Failed to connect to DB: ' + err);
});
exports.default = dataSource;
