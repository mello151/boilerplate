let fs = require('fs');

let remove = (files) => (answers) => {
    files.forEach(function (f) {
        fs.unlink(f, (err) => {
            if (err) throw err;
        });
    })
}

module.exports = {
    "remove": remove
};
