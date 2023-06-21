const numbers = [1,2,3,4,5,6,7,8,9]
const numbersSum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(numbersSum)
// let name = "luka"
// function greeting(name) {
//     alert(`Hello, ${name}`);
//   }
//   function processUserInput(callback) {
//     const name = alert("Please enter your name.");
//     callback(name);
//   }
//   console.log(processUserInput(greeting))
  function getSquaredNumber(number) {
    const squaredNumber = number*number
    return squaredNumber
  }
  console.log(getSquaredNumber(12))
  const person = {
    name: "giorgi",
    age: 26,
  }
  function addNewValues(person) {
    const newPerson = { ...person, status: 'New', point: 40 };
    return newPerson;
  }
  console.log(addNewValues(person))
  function getNumberDifference(a,b) {
    if (a>b) {
        return 1 
    }
    else if (a<b) {
        return -1
    }
    else {
        return 0
    }
  }
  console.log(getNumberDifference(4,3))
function getTextLenght(text) {
    if (text.length < 6) {
        return "text lenght is too small"
    }
    else {
        return "goat"
    }
}
console.log(getTextLenght("small"))
const array = ["vaxo", "jemali", "pexshvela"]
const stringArr = array.toString()
console.log(stringArr)