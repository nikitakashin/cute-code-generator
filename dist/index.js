// exports.printMsg = function() {
// const printMsg = function() {
//   for (let i = 0; i < 100; i++) {
//     console.log(generateCuteCode());
//   }
// };
module.exports.generateCuteCode = () => {
  const variant = generateNumber();

  if (variant < 2) {
    return codeByThreeRandomNumbers();
  } else if (variant < 5) {
    return codeByNumberAndZero();
  } else if (variant < 7) {
    return codeByOneNumberAndThreeTimesAnotherNumber();
  } else {
    return codeByRepeatingTwoDigitNumber();
  }
}; ///////////////////////////
///// Code Generators /////
///////////////////////////


const codeByRepeatingTwoDigitNumber = () => {
  const twoDigitNumber = generateTwoDigitNumber();
  return twoDigitNumber + twoDigitNumber;
};

const codeByNumberAndZero = () => {
  let number = generateNumber();
  number = number === 0 ? 9 : number;
  const zero = String(0);
  const randomInt = generateNumber();

  if (randomInt < 5) {
    return String(number) + zero + String(number) + zero;
  } else {
    return zero + String(number) + zero + String(number);
  }
};

const codeByOneNumberAndThreeTimesAnotherNumber = () => {
  const firstNumber = String(generateNumber());
  const secondNumber = parseInt(firstNumber) === 0 ? String(9) : String(9 - parseInt(firstNumber));
  const randomInt = generateNumber();

  if (randomInt < 5) {
    return firstNumber + secondNumber + secondNumber + secondNumber;
  } else {
    return secondNumber + secondNumber + firstNumber + secondNumber;
  }
};

const codeByThreeRandomNumbers = () => {
  const firstNumber = String(generateNumber());
  const secondNumber = String(generateNumber());
  const thirdNumber = String(generateNumber());
  const randomInt = generateNumber();

  if (randomInt < 5) {
    return firstNumber + secondNumber + firstNumber + thirdNumber;
  } else {
    return thirdNumber + firstNumber + firstNumber + secondNumber;
  }
}; ///////////////////////////
/// Auxiliary Functions ///
///////////////////////////


const generateNumber = () => {
  return Math.floor(Math.random() * 10);
};

const generateTwoDigitNumber = () => {
  const firstNumber = generateNumber();
  const secondNumber = firstNumber === 0 ? 9 : 9 - firstNumber;
  return String(firstNumber) + String(secondNumber);
};