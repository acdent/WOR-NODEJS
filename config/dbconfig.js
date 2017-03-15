/**
 * Created by IT on 3/14/2017.
 */
var ADODB = require('node-adodb');
connection = ADODB.open('Provider=Microsoft.Jet.OLEDB.4.0;Data Source=WOR_DATA.mdb;');
module.exports = connection;
