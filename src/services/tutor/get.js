const { tutorRepository } = require('../../repositories');
const { Company, TutorByCompany } = require('../../models');

module.exports = async (id) => {
  const tutor = await tutorRepository.findOne({
    where: {
      id,
    },
    include: [
      {
        model: Company,
        as: 'company',
        through: {
          model: TutorByCompany,
          as: 'order',
          attributes: ['createdAt'],
        },
      },
    ],
  });

  return tutor;
};
