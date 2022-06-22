const Router = require('express');

const router = new Router();

const mpe1gemRouter = require('./mpe1gem.router');
const r1022Router = require('./r1022.router');

router.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Headers',
    'x-access-token, Origin, Content-Type, Accept',
  );
  next();
});

router.use('/mpe1gem', mpe1gemRouter);
router.use('/r1022', r1022Router);

module.exports = router;
