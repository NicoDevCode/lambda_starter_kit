'use strict';
var CryptoJS = require("crypto-js");
let configDB = require('../conectDB/dynamoDB')
const USERS_TABLE = process.env.USERS_TABLE;
const CREDITOS_TABLE = process.env.CREDITOS_TABLE;
const BANCO_TABLE = process.env.BANCO_TABLE;
let dynamoDB = configDB.DB();
const QueriesPrueba = require('../queries/query-prueba');

const pruebas = async (req, res) => {
    const newQuery = await QueriesPrueba.select_test;
    console.log('test', newQuery)
    res.send('Hola mundo con expressjs');
}


module.exports = {
    pruebas
}