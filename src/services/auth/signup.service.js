const { StatusCodes } = require("http-status-codes");
const yup = require("yup");
const { messages } = require("../../helpers");
const { usersRepository } = require("../../repositories");
const bcrypt = require("bcrypt");

module.exports.signup = async (body) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    birthday: yup.date(),
    graduation: yup.string(),
    about: yup.string(),
    interests: yup
      .array(
        yup
          .string()
          .equals([
            "Android",
            "Backend",
            "Frontend",
            "Gestão de projetos",
            "UI/UX",
          ])
      )
      .required(),
    gender: yup
      .string()
      .equals([
        "Mulher cis",
        "Homem cis",
        "Homem trans",
        "Mulher trans",
        "Não binário",        
        "Prefiro não responder",
        "Outros",
      ])
      .required(),
    race: yup
      .string()
      .equals(["Amarela", "Branca", "Indígena", "Parda", "Preta"])
      .required(),
    sexualOrientation: yup
      .string()
      .equals([
        "Heterossexual",
        "Homossexual",
        "Bissexual",
        "Panssexual",
        "Assexual",
        "Prefiro não responder",
        "Outros",      
      ])
      .required(),
    password: yup.string().required(),
    locationState: yup.string().required(),
    locationCity: yup.string().required(),
    email: yup.string().email().required(),
  });

  const validated = await schema.validate(body, {
    stripUnknown: true,
  });

  const user = await usersRepository.get({
    where: {
      email: validated.email,
    },
  });

  if (user) {
    throw {
      status: StatusCodes.CONFLICT,
      message: messages.emailUnavailable,
      
    };
    
  }

  return usersRepository.create({
    ...validated,
    password: bcrypt.hashSync(validated.password, 8),
  });
};
