// // var

// const altura = 1.7;
// const largura = 2.5;
// const forma = "triangulo";
// let area;

// if(forma === "retangulo") {
//     area = altura * largura
// } else {
//     area = (altura * largura) / 2;
// }

// console.log(area);


// //truthy or falsy

// // 0 = false;
// // 1 = true;
// // "" = false;
// // NaN = false;
// // null = false;
// // undefined = false;

// //null: type object (deveria ser null, mas erro não pode
// // mais ser consertado, pois quebraria muitos códigos); undefined: type undefined;

// // conversão implicita

// const numero = 123;
// const numeroString = '123';

// console.log(numero == numeroString); // == compara só os valores em JS, === compara valores
// //e tipos das variáveis

// //conversão explícita
// // usa functions: por exemplo: Number() e String()

// console.log(String(numero));
// console.log(Number(numeroString));


// // operador ternário: mais simples que o if, numa só linha tem todo o código,
// //mas não é recomendado para casos com muitas condições

// const idadeMinima = 18;
// const idadeCliente = 15;

// if (idadeCliente >= idadeMinima) {
//     console.log("cerveja");
// }    else{
//         console.log("leite");
//         }

// console.log(idadeCliente >= idadeMinima ? "cerveja" : "leite");

// //template string

//  const cidade =  "Utah";
//  const idade = 23;
//  const nome = "Jack";

//  console.log("Meu nome é " + nome + ", " + "nasci em " + cidade + " e minha idade é " + idade);

//  console.log(`Meu nome é ${nome}, nasci em ${cidade} e minha idade é ${idade}`);

 //function: existem três formas de escrita

 function imprimeTexto (texto){
    console.log(texto)
}

imprimeTexto("qualquer coisa");
imprimeTexto(350);
imprimeTexto(soma());

function soma(){
   return 350 + 800;
}

// functions com parametros

function somaMesmo(num1, num2) {
   return num1 + num2;
}

function multiplica(num1 = 1, num2 = 1){
   return num1 * num2;
}

console.log(somaMesmo(15, 23));
console.log(multiplica(25, 33));
console.log(multiplica(soma(18, 19), soma(21, 26)));

//outras formas de escrever functions

//declaração de função
const somaa = function(num1, num2) {return num1 + num2};

console.log(somaa(15, 18));

//arrow function
const somaaa = (num1, num2) => num1 + num2;
console.log(somaaa(33, 36));

//arrow function grande que precise quebrar linha tem
//que usar return e {}

const idades = (age1, age2) => {
   if (age1 >= 18 && age2 <= 36){ 
      return `tudo ok {somaa}`
   }else {
      return `tente outro dia`
      }
   }

console.log(idades());