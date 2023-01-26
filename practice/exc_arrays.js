// variable but has multple slots
const myArr = ["bob", "betty", "sue"];
console.log(myArr);
const myOtherArray = new Array();
myOtherArray.push("Star Wars"); // add items to end
myOtherArray.push("raiders of the lost ark");
// myArr.pop(); //removes last item
// myArr.shift(); //removes first item
myArr.unshift("james"); //adds item to the beginning of array

console.log(myArr);
console.log(myOtherArray);
console.log(myOtherArray[0]); //read single item
console.log(myArr[1]);
console.log(myArr.indexOf("betty"));
const bettyIdx = myArr.indexOf("betty");
console.log(bettyIdx);
if (bettyIdx > -1) {
    console.log(myArr[bettyIdx]);
}
// getting rid of things in the middle of a array
myArr.splice(bettyIdx, 0, "robert");
console.log(myArr);
console.log(myArr.length);
// math.random() for random 0 and 1
//Math.round(n) round to nearest whole number
// myArr length - 1 to get the last index number of an array
const randomNumber = Math.round(Math.random() * (myArr.length -1));
console.log(myArr[randomNumber]);
