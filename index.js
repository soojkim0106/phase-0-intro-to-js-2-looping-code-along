// Code your solutions in this file
/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);
*/

let names = ["Charlie", "Samip", "Ali"];
function writeCards(names, event){
    let messages = [];
    let i = 0;
    for(i = 0; i< names.length; i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return messages;
}
console.log(writeCards(names, "birthday"));



function countDown(num){
    let i = 10;
    while (i >= 0){
        console.log(i);
        i--;
    }
}
console.log(countDown());