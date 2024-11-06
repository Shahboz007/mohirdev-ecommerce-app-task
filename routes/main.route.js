const { getHomePage, getDetailsPage } = require('../controllers/mainController');

const router = require('express').Router();

router.get('/', getHomePage);
router.get('/details/:id', getDetailsPage);

module.exports = router;