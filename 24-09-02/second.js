const list = [0, 2, 4];
number = 2;

function findIndex(list, number){
    ans = list.indexOf(number);
    return ans;
}

//console.log(findIndex(list, number));

function addNumbers(num1, num2){
    return num1 + num2;
}

//console.log(addNumbers(2,3));

const addNumbersArrow = (num1, num2) => {return num1 + num2};

//console.log(addNumbersArrow(2,5));

const addNumbersArrowShort = (num1, num2) => num1 + num2;

//console.log(addNumbersArrowShort(3, 8));

function addNumbersNested(num1){
    return function(num2){
        return num1 + num2; 
    }
}

//console.log(addNumbersNested(2)(8));

const addNestedShort = (num1) => (num2) => num1+num2;

//console.log(addNestedShort(5)(12));

const printName = (name = "World") => `Hello ${name}`;

//console.log(printName());

const newArray = [1,2,3,4,5]
const add5ToArray = newArray.map(element => element +5 )

console.log(add5ToArray);

const threeParameters = newArray.map((element, index, array) => {
    return element + 5
});