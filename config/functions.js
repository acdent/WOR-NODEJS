/**
 * Created by IT on 3/14/2017.
 */
var config = require('./dbconfig.js');
module.exports.localReg = function(username, password, store) {
    config.query('SELECT txtFirst, txtLast, numStore, txtLoginName, txtPassword, numUserLevel FROM tblEmployee WHERE txtLoginName = ' + username)
        .on('done', function(data) {
            console.log('Result"', data);
        }).on('fail', function(data) {
            console.log(data);
    });
}