import x from "./practice1.js";

console.group("groupFour");
console.warn("Function prototype call, apply, bind"); x();
function saludar() {
	console.log(`Hola me llamo ${this.name} alias: ${this.alias} `);
}

const Rodri = {
	name: "Rodri",
	alias: "rroderickk",
};

saludar.call(Rodri);

function caminar(metros, direccion) {
	console.log(`${this.alias} camina ${metros} metros hacia el ${direccion}`);
}

//* call - this:objeto, argumentos, separados por comas */
caminar.call(Rodri, "400", "Norte");

//? apply - this:objeto, array con argumentos */
caminar.apply(Rodri, ["800", "Este"]);

// bind - this:objeto, array con argumentos */
const Javascript = {
	name: "Javascript",
	alias: "V8",
};
const Jsaludando = saludar.bind(Javascript);
Jsaludando();

const Jcamina = caminar.bind(Javascript, "800");
Jcamina("Sur");

const npa = document.getElementsByClassName("noParesDeAprender");
Array.prototype.forEach.call(npa, (button) => {
	button.onclick = () => alert("Nunca pares de aprender!");
});
console.groupEnd("groupFour");

console.group("groupFive");
console.warn("Prototype"); x();
///* Constructor */
//// function Hero(name) {
//// 	const hero = {
//// 		name: name,
//// 	};
//// 	hero.saludar = function () {
//// 		console.log(`Hola soy ${this.name}`);
//// 	};
//// 	return hero;
//// }

//// const zelda = new Hero("link");
//// zelda.saludar();
//* Hero Methods */
// const heroMethods ={
// 	saludar: function () {
// 		console.log(`Me llamo ${this.name}`);
// 	},
// };
// function Hero(name) {
// 	const hero = {
// 		name: name,
// 	};
// 	hero.saludar = heroMethods.saludar;
// 	return hero;
// }
// const zelda = new Hero("Link");
// zelda.saludar();
// const link = new Hero("Zelda");
// link.saludar();

// //! Object.create */
// const heroMethods ={
// 	saludar: function () {
// 		console.log(`Me llamo ${this.name} usando Object.create`);
// 	},
// };
// function Hero(name) {
// 	const hero = Object.create(heroMethods);
//   hero.name = name;
// 	return hero;
// }
// const zelda = new Hero("Link");
// zelda.saludar();

// const link = new Hero("Zelda");
// link.saludar();

// //! Suggar Syntactic */
// function Hero(name) {
// 	const hero = Object.create(Hero.prototype);
// 	hero.name = name;
// 	return hero;
// }
// Hero.prototype.saludar = function () {
// 	console.log(`Soy superHero ${this.name} `);
// };

// const zelda = Hero("Link");
// zelda.saludar();

// const link = Hero("Zelda");
// link.saludar();

//! Suggar Syntactic */
function Hero(name) {
	//// this = Object.create(Hero.prototype);
	this.name = name;
	//// return hero;
}
Hero.prototype.saludar = function () {
	console.log(`New: ${this.name} `);
};

const zelda = new Hero("Link");
zelda.saludar();

const link = new Hero("Zelda");
link.saludar();

console.groupEnd("groupFive");

console.group("groupSix");

console.warn("Herencia prototypal"); x();

console.groupEnd("groupSix");