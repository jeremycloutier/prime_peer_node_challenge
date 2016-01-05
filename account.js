/**
 * Created by acoelho on 1/5/16.
 */
var rand_numb = require('./rand_numb');
var dollar = require('./dollar');

var randomNum = rand_numb(100, 1000000);
var dollarString = dollar(randomNum);

var myOutput = function(){
    //last return will go here
    return "Account Balance: \n" + dollarString;
};

module.exports = myOutput;