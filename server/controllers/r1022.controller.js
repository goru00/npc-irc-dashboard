/* eslint-disable no-empty-function */
/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
const R1022Service = require('../services/r1022.service');

// контроллеры субъектов

class R1022Controller {
  async get(req, res, next) {
    try {
      const data = await R1022Service.get({ ...req.params });
      return res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  async getByFilter(req, res, next) {
    try {
      const data = await R1022Service.getByFilter(req.params.query);
      return res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new R1022Controller();
