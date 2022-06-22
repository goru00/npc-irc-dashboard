const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('./routes/index');

const app = express();

const PORT = process.env.PORT || 8080;

const corsOptions = {
  origin: 'http://localhost:8081',
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({
  extended: true,
}));

app.use(cookieParser());

app.use('/v1/api/', router);

const db = require('./models');

db.sequelize.sync({
  force: true,
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Сервер запущен: ${PORT}`);
});
