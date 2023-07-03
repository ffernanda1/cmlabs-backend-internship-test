function fizzBuzz(){
    let angka = []
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            angka.push("FizzBuzz");
        } else if (i % 3 === 0) {
            angka.push("Fizz");
        } else if (i % 5 === 0) {
            angka.push("Buzz");
        } else {
            angka.push(i);
        }
    } return angka
}

console.log(fizzBuzz())