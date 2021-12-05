function decimalAdjust(type, value, exp) {
    // Если степень не определена, либо равна нулю...
    if (typeof exp === 'undefined' || +exp === 0) {
        return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // Если значение не является числом, либо степень не является целым числом...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
        return NaN;
    }
    // Сдвиг разрядов
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Обратный сдвиг
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
}

function roundNumber(num, scale) {
    if (!("" + num).includes("e")) {
        return +(Math.round(num + "e+" + scale) + "e-" + scale);
    } else {
        let arr = ("" + num).split("e");
        let sig = ""
        if (+arr[1] + scale > 0) {
            sig = "+";
        }
        return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
    }
}

function indexesOf(string, regex) {
    let match,
        indexes = {};

    regex = new RegExp(regex);

    while (match = regex.exec(string)) {
        if (!indexes[match[0]]) indexes[match[0]] = [];
        indexes[match[0]].push(match.index);
    }

    return indexes;
}


// Десятичное округление к ближайшему
if (!Math.round10) {
    Math.round10 = function (value, exp) {
        return decimalAdjust('round', value, exp);
    };
}
// Десятичное округление вниз
if (!Math.floor10) {
    Math.floor10 = function (value, exp) {
        return decimalAdjust('floor', value, exp);
    };
}
// Десятичное округление вверх
if (!Math.ceil10) {
    Math.ceil10 = function (value, exp) {
        return decimalAdjust('ceil', value, exp);
    };
}

function parseNumber(number) {
    let result = undefined
    // 127383.62738
    if (bigNumber(number)) {
        result = Math.ceil(number)
    }
    //12.3456789
    if (!bigNumber(number) && !smallNumber(number)) {
        result = Math.round10(number, -2)
    }
    //0.42010412592150
    //0.00001041259215
    //0.10010412592150
    if (smallNumber(number)) {
        // result = Math.round(0.42010412592150 * 100) / 100
        let stringNumber = String(number)
        let count = 0
        for (let i = 2; i < stringNumber.length; i++) {
            if (stringNumber[i] === '0') {
                count++
            } else {
                break
            }
        }
        result = Number(stringNumber.substring(0, count + 5))
    }
    return result
}


Number.prototype.countDecimals = function () {
    if (Math.floor(this.valueOf()) === this.valueOf()) return 0;
    return this.toString().split(".")[1].length || 0;
}


let x = 23.453453453;
console.log(x.countDecimals())

console.log(Math.round10(55.55, -1))
console.log(Math.round10(55.549, -1))  // 55.5)

//если перед запятой >= 3 знаков то число считается большим и знаки после запятой не учитываются абсолютно
// если перед запятой < 3 знаков и число больше единицы, то число считается обычным и оставляется 2 знака после запятой (пример: 12.3456789 -> 12.35
// если число меньше единицы, то оставляем 3 знака после НУЛЕЙ(считаются и нули после запятой)!!. Т.е. 0.01234566 - это 0.0124
let bigNumber = (n) => n >= 100
// let commonNumber = это !bigNumber && !smallNumber
let smallNumber = (n) => n < 1


// let numberAmountAfterComma


// if(numberSmall.countDecimals()>=decimalsLeft){
//
// }

export default parseNumber
