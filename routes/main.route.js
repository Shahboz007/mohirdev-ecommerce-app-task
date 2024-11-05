const { getHomePage, getDetailsPage } = require('../controllers/main.controller');

const router = require('express').Router();

router.get('/', getHomePage);
router.get('/details/:id', getDetailsPage);

module.exports = router;