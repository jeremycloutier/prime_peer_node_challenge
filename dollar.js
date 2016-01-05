/**
 * Created by acoelho on 1/5/16.
 */
//The second module should accept a number and convert it to a USD value (Hint: you will want to Google examples of this.
// I found a couple reasonable examples of this in a simple 5 minute search).


var dollar = function toUSD(number) {
    var number = number.toString(),
        dollars = number.split('.')[0],
        cents = (number.split('.')[1] || '') +'00';
    dollars = dollars.split('').reverse().join('')
        .replace(/(\d{3}(?!$))/g, '$1,')
        .split('').reverse().join('');
    return '$' + dollars + '.' + cents.slice(0, 2);
};

module.exports = dollar;