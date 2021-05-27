const { StatusCodes } = require('http-status-codes');
const { logger } = require('lowe');
const { buildResponse } = require('../helpers');
const { studentService } = require('../services');

module.exports = {
  async create(req, res) {
    try {
      const student = await studentService.create(req.body);
      return buildResponse(false, res, {
        status: StatusCodes.CREATED,
        body: student.toJSON(),
      });
    } catch (error) {
      logger.error(error);
      return buildResponse(error, res);
    }
  },
  async get(req, res) {
    try {
      const student = await studentService.get(req.user);
      return buildResponse(false, res, {
        status: StatusCodes.OK,
        body: student.toJSON(),
      });
    } catch (error) {
      logger.error(error);
      return buildResponse(error, res);
    }
  },
};
