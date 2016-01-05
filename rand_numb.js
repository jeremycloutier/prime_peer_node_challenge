/**
 * Created by acoelho on 1/5/16.
 */
var randomNumber = function(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min );
};

module.exports = randomNumber;