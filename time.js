const numbers = [0, 7, 7, 7];

const time = [];

const show = (element) => console.log(element);

const push = (item) => {
  time.push(item);
  show(time);
};

const getMax = (array) => {
  return Math.max(...array);
};

const getSmallNumbers = (array, argument) => {
  return array.filter((num) => num <= argument);
};

const arrayGetMax = (arg) => {
  const smallNumbers = getSmallNumbers(numbers, arg);
  const max = getMax(smallNumbers);
  return max;
};

const getIndex = (index) => {
  return numbers.indexOf(index);
};

const removeItem = (i, array) => {
  delete array[i];
  return array;
};

const getElementIndex = (num) => getIndex(arrayGetMax(num));

const init = (fn) => removeItem(fn, numbers);

const date = (h1) => {
  const maxNum = arrayGetMax(h1);
  init(getElementIndex(h1));
  push(maxNum);
  return maxNum;
};

const hours = () => {
  const h2 = date(2);
  if (h2 <= 2) {
    if (h2 === 2) {
      return date(3);
    } else {
      return date(9);
    }
  } else {
    show("not date format");
    return;
  }
};

const minutes = () => {
  const m1 = date(5);
  if (m1 <= 5) {
    date(9);
  } else {
    show("no date format");
  }
};

hours();
minutes();
