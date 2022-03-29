type Code = string;

module.exports.generateCuteCode = (): Code => {
  const variant = generateNumber();
  if (variant < 2) {
    return codeByThreeRandomNumbers();
  } else if (variant < 4) {
    return codeByNumberAndZero();
  } else if (variant < 6) {
    return codeByOneNumberAndThreeTimesAnotherNumber();
  } else if (variant < 8) {
    return codeByRepeatingTwoDigitNumber();
  } else {
    return codeByXXPlusXXPlusOne();
  }
};

///////////////////////////
///// Code Generators /////
///////////////////////////

const codeByRepeatingTwoDigitNumber = (): Code => {
  const twoDigitNumber = generateTwoDigitNumber();
  return twoDigitNumber + twoDigitNumber;
};

const codeByNumberAndZero = ():string => {
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

const codeByOneNumberAndThreeTimesAnotherNumber = (): Code => {
  const firstNumber = String(generateNumber());
  const secondNumber = parseInt(firstNumber) === 0 ? String(9) : String(9 - parseInt(firstNumber));

  const randomInt = generateNumber();
  if (randomInt < 5) {
    return firstNumber + secondNumber + secondNumber + secondNumber;
  } else {
    return secondNumber + secondNumber + firstNumber + secondNumber;
  }
};

const codeByThreeRandomNumbers = (): Code => {
  const firstNumber = String(generateNumber());
  const secondNumber = String(generateNumber());
  const thirdNumber = String(generateNumber());

  const randomInt = generateNumber();
  if (randomInt < 5) {
    return firstNumber + secondNumber + firstNumber + thirdNumber;
  } else {
    return thirdNumber + firstNumber + firstNumber + secondNumber;
  }
};

const codeByXXPlusXXPlusOne = (): Code => {
  let firstNumber = getRandomTwoDigitnNumber();
  if (firstNumber < 10) {
    firstNumber += 10;
  }
  const secondNumber = firstNumber !== 99 ? firstNumber + 1 : firstNumber - 9

  return String(firstNumber) + String(secondNumber);
};

///////////////////////////
/// Auxiliary Functions ///
///////////////////////////

const generateNumber = ():number => {
  return Math.floor(Math.random() * 10);
};

const generateTwoDigitNumber = (): Code => {
  const firstNumber = generateNumber();
  const secondNumber = firstNumber === 0 ? 9 : 9 - firstNumber;
  return String(firstNumber) + String(secondNumber);
};

const getRandomTwoDigitnNumber = (): number => {
  return Math.floor(Math.random() * 100);
};
