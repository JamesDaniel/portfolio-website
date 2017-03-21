/**
 * @author James Daniel
 */
exports.index = function (req, res) {
    var path = require('path');
    res.sendFile('index.html', { root: path.join(__dirname, '../public/app') });
}