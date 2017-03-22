module.exports = (function () {
    var devHost = process.env.IP || null;
    var devPort = process.env.PORT || 8080;
    var dbCreds = {
        host: process.env.DB_HOST || 'ds137340.mlab.com',
        port: process.env.DB_PORT || 37340,
        dbName: 'sayings',
        uname: process.env.DB_USER || 'tempUser',
        pass: process.env.DB_PASS || 'tempPass'
    }
    dbCreds.connStr = 'mongodb://' + dbCreds.uname + ':' + dbCreds.pass + '@' + dbCreds.host + ':' + dbCreds.port + '/' + dbCreds.dbName;
    
    return {
        dev: {
            host: devHost,
            port: devPort,
            db: dbCreds
        }
    }
}());