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
const bettyIdx = myArr.indexOf("jetty");
console.log(bettyIdx);
if (bettyIdx > -1) {
    console.log(myArr[bettyIdx]);
}
// getting rid of things in the middle of a array
