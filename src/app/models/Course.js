const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');

const Course = new Schema(
    {
        name: { type: String },
        price: { type: String },
        image: { type: String },
        description: { type: String },
        slug: { type: String, slug: 'name', unique: true },
        videoID: { type: String },
    },
    {
        timestamps: true,
    },
);

// add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });

module.exports = mongoose.model('Course', Course);
