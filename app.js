// Chapter (Arrays)


// Q1

var studentNames = [];

// Q2

var studentNames = [];

// Q3

var stringArray = ["Apple", "Banana", "Cherry"];

// Q4

var numberArray = [1, 2, 3, 4, 5];

// Q5

var boolArray = [true, false, true, false];

// Q6

var mixedArray = [1, "Grape", true, 3.14];

// Q7

var qualifications = ["SSC <br/>", "HSC <br/>" , "BCS <br/>" ,
    " BS <br/>" , "BCOM <br/>" , " MS <br/>" , " M. <br/>" , "PHil. <br/>" , "PhD <br/>" ]

    document.write(qualifications)

// Q8

// ------Not Answer-----





// Chapter No 15 (Array 1)


// Q1

var emptyArray = [];

// Q2

var stringArray = ["Hello"];

// Q3

var alphabet = ["h", "i", "j", "k"];
alert(alphabet[2]);

// Q4

var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
var lengthOfArray = alphabet.length;
console.log(lengthOfArray); 

// Q5

var myArray = ["First Element"];
myArray[1] = "Second Element";
alert(myArray[1]);





// Chapter No 16 (Array 11)


// Q1

var myArray = ["First Element"];
myArray.push("Second Element");
alert(myArray[myArray.length - 1]);

// Q2

var Alphabet = ["h", "i", "j", "k"];
Alphabet.pop();
console.log(Alphabet);

// Q3

var Alphabet = ["h", "i", "j", "k"];
Alphabet.push(5);
console.log(Alphabet);





// Chapter No 16 (Array 111)


// Q1

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift();
console.log(sizes);

// Q2

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.unshift(1, 2, 3);
console.log(sizes);

// Q3

var myArray = ["Original Element"];
myArray.unshift("New First Element");
alert(myArray[0]);

// Q4

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2, 0, "L");
console.log(sizes);

// Q5

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var regSizes = sizes.slice(0, 3);
console.log(regSizes);

// Q6

var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 3, "rabbit", "parrot");
console.log(pets);

// Q7

var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 2); 
console.log(pets);

// Q8

var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
var newPets = pets.slice(3, 5);
console.log(newPets);