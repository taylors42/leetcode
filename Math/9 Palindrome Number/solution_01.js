const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
    readline.question('Write a number: ', number => {
    readline.close();
    if (!isNaN(number))
    if (number[0] === "-"){
        console.log("false")
        return
    }
    if (number.split("").reverse().toString() === number.split("").toString()){
        console.log("true")
        return
    }
    else {
        console.log("false")
    }
  });