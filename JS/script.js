// selcting inputs from the html\

const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const demo = document.getElementById("demo");
// function for addition
function add() {
  const add1 = Number(box1.value);
  //   store the value into vareibales
  const add2 = Number(box2.value);
  const result = add1 + add2;
  //   return the value into html file
  return (document.getElementById("demo").innerHTML = result);
}
// substraction
function Sub() {
  const add1 = Number(box1.value);
  const add2 = Number(box2.value);
  const result = add1 - add2;
  return (document.getElementById("demo").innerHTML = result);
}
// multipication
function multi() {
  const add1 = Number(box1.value);
  const add2 = Number(box2.value);
  const result = add1 * add2;
  return (document.getElementById("demo").innerHTML = result);
}
// divition
function divi() {
  const add1 = Number(box1.value);
  const add2 = Number(box2.value);
  const result = add1 / add2;
  return (document.getElementById("demo").innerHTML = result);
}

// output
// i leran this topic arthematic operators to get the result by two inputs

// using function call the function into html when we click button
