const { Router } = require('express');
const { studentController } = require('../../../controllers');
const isAuthorized = require('../middlewares/isAuthorized');

const router = Router();

router.post('/', studentController.create);
router.get('/', isAuthorized, studentController.get);

module.exports = router;
