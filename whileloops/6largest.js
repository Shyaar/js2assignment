// Finding the Largest Digit in a Number Using While Loop
let n = 3659;
let newString = String(n);
let largest = 0
let counter = 0
// console.log(newString.length)
// console.log(newString.charAt([0]))

while (counter < newString.length) {
//   console.log(typeof newString);]
    console.log(`this is the ${newString[counter]}`)
    if(largest<newString[counter]){
      console.log(true)
      largest=newString[counter]
    }
    counter++
    largest = Number(largest)
    console.log(largest)
}

//   console.log(newString.charAt([0]) > newString.charAt([0] + 1));


