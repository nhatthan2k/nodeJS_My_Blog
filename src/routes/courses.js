const express = require('express');
const router = express.Router();
const coursecontroller = require('../app/controller/CourseController');

router.get('/create', coursecontroller.create);
router.post('/store', coursecontroller.store);
router.get('/:id/edit', coursecontroller.edit);
router.put('/:id', coursecontroller.update);
router.patch('/:id/restore', coursecontroller.restore);
router.delete('/:id', coursecontroller.delete);
router.delete('/:id/force', coursecontroller.forcedelete);
router.get('/:slug', coursecontroller.courses);

module.exports = router;
