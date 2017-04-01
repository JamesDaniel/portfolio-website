module.exports = (function () {
    var creds = {
        host: "",
        port: "",
        db: {
            host: "",
            port: "",
            dbName: "",
            uname: "",
            pass: ""
        }
    };
    
    var dbCreds = creds.db;
    creds.db.connStr = function () {
        return 'mongodb://' + dbCreds.uname + ':' + dbCreds.pass + '@' + dbCreds.host + ':' + dbCreds.port + '/' + dbCreds.dbName;
    };
    if (process.env.ENV === "dev") { // TODO fix local mongodb
        creds.host = process.env.IP || null;
        creds.port = process.env.PORT || 8080;
        creds.db.host = 'localhost';
        creds.db.port = 28017;
        creds.db.dbName = 'sayings';
        creds.db.uname = 'user'; 
        creds.db.pass = process.env.DB_PASS;
    } else if (process.env.ENV === "prod") {
        creds.host = process.env.IP || null;
        creds.port = process.env.PORT || 8080;
        creds.db.host = 'ds137340.mlab.com';
        creds.db.port = 37340;
        creds.db.dbName = 'sayings';
        creds.db.uname = process.env.DB_UNAME;
        creds.db.pass = process.env.DB_PASS;
    } else if (process.env.ENV === "QA") {
        creds.host = process.env.IP || null; // TODO config for codeship
        creds.port = process.env.PORT || 8080;
        creds.db.host = 'ds137340.mlab.com';
        creds.db.port = 37340;
        creds.db.dbName = 'sayings';
        creds.db.uname = process.env.DB_UNAME;
        creds.db.pass = process.env.DB_PASS;
    }
    creds.db.connStr = function () {
        return 'mongodb://tempUser:tempPass@ds137340.mlab.com:37340/sayings';
    }
    return {
        host: creds.host,
        port: creds.port,
        getDbStr: creds.db.connStr
    };
}());