// Given an array of names, write a program that prints a thank your message for each of the user. Sample output: "Thank you user for the birthday gift", where "user" is the name(s) from the array

let names = ['James','John','Bill','Paul']

for(i=0; i<names.length; i++){
    console.log(`Thank you ${names[i]} for the birthday gift`)
}