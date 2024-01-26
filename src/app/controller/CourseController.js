const Course = require('../models/Course');

class CourseController {
    // [GET] courses/:slug
    courses(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .lean()
            .then((course) =>
                res.render('course/show', {
                    course,
                }),
            )
            .catch(next);
    }

    // [GET] courses/create
    create(req, res) {
        res.render('course/create');
    }

    // [POST] courses/store
    store(req, res) {
        req.body.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;
        const course = new Course(req.body);
        course
            .save()
            .then(() => {
                res.redirect('/me/stored/courses');
            })
            .catch((error) => {
                // Xử lý lỗi nếu cần thiết
                res.status(500).send('Save failed');
            });
    }

    // [GET] courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .lean()
            .then((course) => {
                res.render('course/edit', { course });
            })
            .catch(next);
    }

    // [PUT] courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    // [DELETE] courses/:id
    delete(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

        // [DELETE] courses/:id/force
        forcedelete(req, res, next) {
            Course.deleteOne({ _id: req.params.id })
                .then(() => res.redirect('back'))
                .catch(next);
        }

    // [PATCH] courses/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new CourseController();
