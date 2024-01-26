const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class CourseController {
    // [GET] /me/stored/courses
    StoredCourses(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsWithDeleted({ deleted: true })])
            .then(([courses, deleteCourse]) =>
                res.render('me/StoredCourses', {
                    deleteCourse,
                    courses: mutipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }

    // [GET] /me/trash/courses
    TrashCourses(req, res, next) {
        Course.findWithDeleted({ deleted: true })
            .lean()
            .then((course) => {
                res.render('me/TrashCourses', {
                    course,
                });
            })
            .catch(next);
    }
}

module.exports = new CourseController();
