const Router = require('express');

const router = new Router();

const R1022Controller = require('../controllers/r1022.controller');

// маршруты для получения данных из таблицы субъектов

router.get('/', R1022Controller.get);
router.get('/:query?', R1022Controller.getByFilter);

module.exports = router;
