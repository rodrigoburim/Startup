#!/usr/bin/env node

// Return is a number is prime or not
var isprime = function(n) {
    if (n < 2) { 
        return false; 
    } else if (n == 2 | n == 3 | n == 5 | n == 7) {
        return true;
    } else if ((n % 2 == 0) | (n % 3 == 0) | (n % 5 == 0) | (n % 7 == 0)) { //precisa todos os primos!
        return false;
    } else {
        for (var i = n - 1; i > 1; i--){
            if (n % i == 0)
            {
             return false;
            }
        }
    }
    return true;
};

// Return is a number is prime or not
var isprime2 = function(n) {
    if (n < 2) { 
        return false; 
    } else if (n == 2 | n == 3 | n == 5 | n == 7) {
        return true;
    } else if ((n % 2 == 0) | (n % 3 == 0) | (n % 5 == 0) | (n % 7 == 0)) { //precisa todos os primos!
        return false;
    } else {
        return true;
    }
};

// Find first K Prime numbers via basic for loop
var firstkprime = function(k) {
    var j = 2;
    var i = 0;
    var arr = [];
    do {
        if (isprime(j)) {
            arr.push(j);
            i++
        }
        j++
    } while (i < k)
    return arr;
};

//Print to console
var fmt = function(arr) {
    return arr.join(", ");
};

var k = 168;
var fs = require('fs');
var out = fmt(firstkprime(k));
var outfile = "prime.txt";
fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);