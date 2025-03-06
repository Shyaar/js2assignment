// Generating Fibonacci Sequence up to N Terms with While Loop

let n=10
let counter = 0
let sequence =[0,1]
//console.log(sequence.lastIndexOf(sequence))
// console.log(sequence[sequence.length-1])
while(counter<=n){

    let fibonacci = sequence[sequence.length-1] + sequence[sequence.length-2]
    sequence.push(fibonacci)
    counter++
}
console.log(sequence)