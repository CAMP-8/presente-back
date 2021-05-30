const { StatusCodes } = require("http-status-codes");
const { authService } = require("../services");
const yup = require("yup");

module.exports = {
  signin: async (req, res) => {
    try {
      const schema = yup.object().shape({
        email: yup.string().required().email(),
        password: yup.string().required(),
      });

      await schema.validate(req.body, {
        stripUnknown: true,
      });

      const { email, password } = req.body;
      const response = await authService.signin(email, password);
      return res.status(StatusCodes.OK).json(response);
    } catch (error) {
      console.error(error);
      return res
        .status(
          error.name == "ValidationError"
            ? StatusCodes.UNPROCESSABLE_ENTITY
            : error.status || StatusCodes.INTERNAL_SERVER_ERROR
        )
        .json(error.message);
    }
  },

  async signup(req, res) {
    try {
      const user = await authService.signup(req.body);
      return res.status(StatusCodes.CREATED).json(user.toJSON());
    } catch (error) {
      console.error(error);
      return res
        .status(
          error.name == "ValidationError"
            ? StatusCodes.UNPROCESSABLE_ENTITY
            : error.status || StatusCodes.INTERNAL_SERVER_ERROR
        )
        .json(error.message);
    }
   },
  async logout(req, res) {
    try {
      await authService.logout(req.user);
      return res.status(StatusCodes.NO_CONTENT).json(user.toJSON());
    } catch (error) {
      console.error(error);
      return res
        .status(
          error.name == "ValidationError"
            ? StatusCodes.UNPROCESSABLE_ENTITY
            : error.status || StatusCodes.INTERNAL_SERVER_ERROR
        )
        .json(error.message);
    }
  },
};
