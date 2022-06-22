const Sequelize = require('sequelize');
require('dotenv').config();

const {
  DB, USER, PASSWORD, HOST, DIALECT,
} = process.env;

const sequelize = new Sequelize(
  DB,
  USER,
  PASSWORD,
  {
    host: HOST,
    dialect: DIALECT,
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
);

const db = {
  Sequelize,
  sequelize,
};

sequelize.createSchema('minzdrav');
sequelize.createSchema('public');

db.r1022 = require('./r1022.model')(sequelize, Sequelize);
db.mpe1gem = require('./mpe1gem.model')(sequelize, Sequelize);

module.exports = db;
