const express = require('express');
const router = express.Router();
const sitecontroller = require('../app/controller/SiteController');

router.get('/search', sitecontroller.search);
router.get('/', sitecontroller.home);

module.exports = router;
