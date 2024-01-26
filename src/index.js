const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const path = require('path');
const app = express();
const port = 3001;

const route = require('./routes');
const db = require('./config/db');

// cấu hình biểu mẫu HTML và dữ liệu JSON
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(methodOverride('_method'));

// connect
db.connect();

// ------------
app.use(express.static(path.join(__dirname, 'public')));

// http logger
app.use(morgan('combined'));

// handlebars
app.engine(
    'handlebars',
    handlebars.engine({
        helpers: {
            sum(a, b) {
                return a + b;
            },

            log(data) {
                console.log(data);
                return;
            },
        },
    }),
);

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'views'));

// route
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
