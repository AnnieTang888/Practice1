

////print firstname and sessionTopics
//let StudentTest = {
//    firstname: "Annie",
//    address: "San Jose",
//    sessionTopics: {
//        covered1: "CoreJS",
//        covered2: "OOJS"
//    }
//}
//console.log("firstname:", StudentTest.firstname);
//console.log("sessionTopics:", StudentTest.sessionTopics.covered1);


////along with that also create a lastname and covered3 as "ES6", without making any change in StudentTest

let StudentTest = {
    firstname: "Annie",
    address: "San Jose",
    sessionTopics: {
        covered1: "CoreJS",
        covered2: "OOJS"
    }
}

StudentTest.lastname = "Tang";
StudentTest.sessionTopics.covered3 = "ES6";

console.log("lastname:", StudentTest.lastname);
console.log("sessionTopics:", StudentTest.sessionTopics.covered3);

////create a funtion with name multiply which accepts three parameters, and return multiplication of all
////but if we dont pass any parameter it returns 0

var FuncMulti = function (a, b, c) {

    if (a === undefined || b === undefined || c === undefined) {
        return 0;
    }
    console.log(a * b * c);
}
FuncMulti(2, 3, 4);
//FuncMulti();

////create an array of 1 - 5 and add arr[newval] = at 6th place, print the output using for of and for in loop

let arr = [1, 2, 3, 4, 5];

arr[5] = 6;

for (const key of arr) {
    console.log(key);
}

for (const i in arr) {
    console.log(i);
}

////create an example of const where we can update on property of the object, where it says const is mutable
//// Create an object using const
const Student = {
    studentname: 'Joy',
    ID: 77
};

//// mutate the object property
Student.ID = 99;

//// Print the updated object
console.log(Student); // Output: { name: 'Joy', ID: 99 }

//create a for loop using var and let, print each value in timeout after 2 second and to
//demonstrate functional scope of var and lexical of let

//// Using var (functional scope), var will not hold the data, output is 3,3,3
//for (var i = 0; i < 3; i++) {
//    setTimeout(()=>{
//        console.log(i);
//    }, 2000);
//}

//// Using let (block scope), let will hold the data in the stack, output is 0,1,2
//for (let j = 0; j < 3; j++) {
//    setTimeout(()=> {
//        console.log(j);
//    }, j);
//}