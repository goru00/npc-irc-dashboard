/* eslint-disable no-empty-function */
/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
const Mpe1GemService = require('../services/mpe1gem.service');

class Mpe1GemController {
  async create(req, res, next) {
    try {
      const data = await Mpe1GemService.create({ ...req.body });
      return res.status(201).json({
        message: 'Запись была успешно добавлена',
        ...data,
      });
    } catch (err) {
      next(err);
    }
  }

  async get(req, res, next) {
    try {
      const data = await Mpe1GemService.get({ ...req.body });
      return res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const data = await Mpe1GemService.update({ ...req.body, ...req.params });
      return res.status(201).json({
        message: 'Запись была успешно обновлена',
        ...data,
      });
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      const data = await Mpe1GemService.delete({ ...req.params });
      return res.status(202).json({
        message: 'Запись была успешно удалена',
        ...data,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new Mpe1GemController();
