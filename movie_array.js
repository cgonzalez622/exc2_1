const myFavoriteMovies = ["Spirited Away", "Everything Everywhere All at Once", "Into the Spider-Verse", "Farewell My Concubine", "Coco"];
console.log(myFavoriteMovies);
let movie1 = prompt("what is your favorite movie?")
myFavoriteMovies.push(movie1);
console.log("updated favorite movies", myFavoriteMovies);

//display full list of movies with toString() method
console.log(myFavoriteMovies.toString());
alert("My favorite movies are....")
alert(myFavoriteMovies);