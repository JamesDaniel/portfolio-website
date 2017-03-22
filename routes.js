/**
 * @author James Daniel
 */
module.exports = function (app) {
    var webPages = require('./controllers/web-pages');
    var sayings = require('./controllers/sayings');
    app.get('/', webPages.index);
    app.get('/api/sayings/all', sayings.all);
}