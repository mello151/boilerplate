var fs = require('fs');

var remove = (files) => (answers) => {
    files.forEach(function (f) {
        fs.unlink(f, (err) => {
            if (err) throw err;
        });
    })
}

module.exports = {
    "remove": remove
};
