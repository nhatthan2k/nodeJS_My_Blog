const express = require('express');
const router = express.Router();
const mecontroller = require('../app/controller/MeController');

router.get('/stored/courses', mecontroller.StoredCourses);
router.get('/trash/courses', mecontroller.TrashCourses);

module.exports = router;
