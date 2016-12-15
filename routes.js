/**
 * @author James Daniel
 */
module.exports = function (app) {
    var webPages = require('./controllers/web-pages');
    app.get('/', webPages.index);
}