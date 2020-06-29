'use strict';

let express = require('express')
let UserController = require('../controllers/user')
let api = express.Router();

api.get('/prueba', UserController.pruebas)

module.exports = api;