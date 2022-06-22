/* eslint-disable no-empty-function */
/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
const db = require('../models');

const R1022 = db.r1022;
// eslint-disable-next-line prefer-destructuring
const Op = db.Sequelize.Op;
const R1022Dto = require('../dtos/r1022.dto');
// eslint-disable-next-line import/order
const sequelize = require('sequelize');

class R1022Service {
  async create() {

  }

  async get() {
    // запрос на получение записей из таблицы r1022, где p00 с длиной 10 символов
    // и начинается либо с 0, либо с 13
    const data = await R1022.findAll({
      where: [
        sequelize.where(sequelize.fn('char_length', sequelize.col('p00')), {
          [Op.eq]: 10,
        }), {
          p00: {
            [Op.or]: [
              { [Op.like]: '0%' },
              { [Op.like]: '13%' },
            ],
          },
        }],
    });
    const dataDtos = [];
    for (let index = 0; index < data.length; index += 1) {
      dataDtos.push(new R1022Dto(data[index]));
    }
    return {
      dataDtos,
    };
  }

  async getByFilter(query) {
    const data = await R1022.findAll({
      where: [
        sequelize.where(sequelize.fn('char_length', sequelize.col('p00')), {
          [Op.eq]: 10,
        }), {
          p00: {
            [Op.or]: [
              { [Op.like]: '0%' },
              { [Op.like]: '13%' },
            ],
          },
        }, {
          p01: {
            [Op.like]: `${query}%`,
          },
        }],
    });
    const dataDtos = [];
    for (let index = 0; index < data.length; index += 1) {
      dataDtos.push(new R1022Dto(data[index]));
    }
    return {
      dataDtos,
    };
  }

  async update() {

  }

  async delete() {

  }
}

module.exports = new R1022Service();
