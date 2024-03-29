const Course = require('../models/Course');

class SiteController {
    // [GET] /
    home(req, res, next) {
        Course.find({})
            .lean()
            .then((courses) => {
                // courses = courses.map((course) => course.toObject);
                res.render('home', {
                    courses,
                });
            })
            .catch(next);
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
