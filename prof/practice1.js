console.group("groupOne");
  console.warn("Scope=>Ambito: (4) global, local, blockScope, ModuleScope ");
  const x=()=>console.count("ejercicio");             x();
  var name="Rodri";
  var message="Hello, "+ name;
  console.log("Global: ", message);                   (()=>x())();

//   function printNumbers(){
//     var i;
//     for(var i=0; i<10; i++){
//       function eventuallyPrintNumber(n){
//         setTimeout(()=>{console.log("GlobalScope",n)}, 100);
//       }; 
//       eventuallyPrintNumber(i);
//     };
//   };
//   printNumbers();                                     

//   ////  blockScope */
//   function printNumbers2(){
//     for(let i=0; i<10; i++){
//       function eventuallyPrintNumber(n){
//         setTimeout(()=>{console.log("BlockScope",n)}, 100);
//       }; 
//       eventuallyPrintNumber(i);
//     };
//   };
//   printNumbers2();
// console.groupEnd("groupOne"); x();

console.group("groupTwo");
  console.warn("Closures=>Clausuras");                          x();
  //// IIFE function expressions
  (()=>console.log("function expressions"))();

  var [color, color1,color2,color3,color4] = ["green","blue","orange","black","lime"];
  (()=>{
    const printColor =()=>console.log(color); printColor();
    (()=>console.log(color2))();
    (()=>console.log(color4))();
  })();                                                           x();

  function makeColorPrinter(color){
    let colorMessage = `The color is ${color}`;
    return function (){
      console.log(colorMessage);
    }
  }
  let greenColorPrinter = makeColorPrinter(color);
  greenColorPrinter();                                             x();

  //// Variables Privadas
  const counterPublic ={
    count: 1,
  };
  console.log({"counterPublic, ": counterPublic})

  function makeCounter(n){
    let count = n;
    return {
      increase: function(){ return count = count+1; },
      decrease: function(){ return count = count-1; },
      getCount: function(){ return count; },
    }
  }
  let counterPrivate = makeCounter(8);
  console.log({"counterPrivate, ":counterPrivate});
  console.log("The count is: "+counterPrivate.getCount());
  console.log("The count is incremented: "+counterPrivate.increase());
  console.log("The count is decremented: "+counterPrivate.decrease());
  console.log("The count is: "+counterPrivate.getCount());
console.groupEnd("groupTwo");

console.group("groupThree");
console.warn("This se refiere a un objeto. Ese objeto es el que está actualmente ejecutando un pedazo de codigo");
x();
console.log(`This is equal to: ${this}`);
function whoIsThis(){
  return this
};
console.log(`whoIsThis() ${whoIsThis()}`);

function whoIsThisStrict(){
  "use strict";
  return this
};
console.log(`whoIsThis() ${whoIsThisStrict()}`);

const person ={
  name: "Javascript",
  saludar: function(){
    console.log(`Hey ${this.name} como estas?`)
  },
};
person.saludar();
const accion = person.saludar;
// accion();

function Person(name){
  //// this ={};
  this.name = name;
};
Person.prototype.saludar = function (){
  console.log(`Me llamo ${this.name} como estas?`)
};

const Lorena = new Person("Lorena");
Lorena.saludar();

console.groupEnd("groupThree");

export default x;