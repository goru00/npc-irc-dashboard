const Router = require('express');

const router = new Router();

const Mpe1GemController = require('../controllers/mpe1gem.controller');

// маршруты для получения данных из таблицы возможностей

router.get('/', Mpe1GemController.get);

module.exports = router;
