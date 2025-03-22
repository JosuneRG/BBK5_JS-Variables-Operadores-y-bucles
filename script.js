// -------------- Variables -----------------------
//Declara una variable var "numeroUno" y asígnale un valor numérico
var numeroUno = 26;

//Declara una variable let "texto" y asígnale una cadena de texto
let texto = "Hora de aventuras!";

//cambia el valor de la variable "numeroUno" por otro número
numeroUno = 200;

//Declara una variable const "array" y asígnale un array de números y cadena de texto
const array = [2,3,4,5, "Pedro"];

//Crea una variable let "numeroDos" y asígnale otro número
let numeroDos = 4;

//------------------------ Operadores -----------------------
console.log("los numeros uno:", numeroUno, "y el dos es:",numeroDos);

//Suma la variable "numeroUno" a "numeroDos" y saca el resultado por consola
console.log("Suma: ", numeroUno + numeroDos);

//Multiplica la variable "numeroUno" a "numeroDos" y saca el resultado por consola
console.log("Multiplicacion: ", numeroUno*numeroDos);

//Resta la variable "numeroUno" a "numeroDos" y saca el resultado por consola
console.log("Resta: ", numeroUno-numeroDos);

//Divide la variable "numeroUno" a "numeroDos" y saca el resultado por consola
console.log("Division: ", numeroUno/numeroDos);

//Eleva al cubo la variable "numeroUno" saca el resultado por consola
console.log("Elevar un num al cubo: ", Math.pow(numeroUno,2));

//Obten el resto de la variable "numeroUno" entre "numeroDos" y saca el resultado por consola
console.log("Obten el resto de la variable: " , numeroUno % numeroDos);

//------------------------------------ Bucles ----------------------
//Crea una variable con un array que se llame "numeros" y añade números dentro.
let numeros = [1,2,3,4,5];
let result = 0;
//Calcula la suma de todos los números del array llamado "numeros". Saca el resultado en un console.log()
for(let i = 0; i < numeros.length; i ++)
{
    result += numeros[i];
    console.log("Num vueltas:", i);
}
console.log("El resultado de la suma de los nuumeros del array son:", result);

//Consigue el número más alto del array llamado "numeros". Saca el resultado en un console.log()
let guardarNum = 0;

for(let i = 0; i < numeros.length; i ++)
{
    if(i == 0)
    {
        guardarNum = numeros[i];
    }
    else
    {
        if(guardarNum < numeros[i])
        {
            result = numeros[i];
        }
    }
}
console.log("El numero mas alto es:", result);

//Recorre el array llamado "numeros" y haz lo siguiente:
//A cada uno de los números suma 1 si ese número es mayor o igual a 5. Si es menor que 5 resta 1.
//Saca el resultado uno a uno en un console.log(), donde diga lo que ha hecho. Por ejemplo si ha sumado 1 a 6 debería aparecer: "ELEMENTO ITERADO" es mayor a 5. El resultado es "ELEMENTO ITERADO + 1".
//PISTA: Si necesitas controlar que se cumpla esa condición (mayor o igual a 5) necesitarás usar un condicional. Por ejemplo:
//if(numero[i] >= 5) { numero[i] + 1 } else { numero[i] - 1 }
for(let i = 0; i < numeros.length; i ++)
{
    if(numeros[i] >= 5)
    {
        console.log("La posicion", i, "es el numero: ", numeros[i], "y es mayor a 5. El resultado es ",numeros[i]+ 1);
    }
    else
    {
        console.log("La posicion", i, "es el numero: ", numeros[i], "y es menor a 5. El resultado es ",numeros[i] - 1);
    }
}

//Cuenta cuantos elementos hay en el array. Saca el resultado en un console.log()
for(let i = 0; i < numeros.length; i ++)
{
    console.log("La cantidad de elementos que hay en el array son: ",numeros.length)
}

//Cuenta cuantas veces se repiten las palabras. Saca el resultado en un console.log()
let textoNombres = "Jaime Pedro Laura Marcos Jaime Pedro Jaime Marcos Marcos Marcos";
let conteo = {};
let palabras = textoNombres.toLowerCase().match(/\w+/g);

for (let i = 0; i < palabras.length; i++) 
{
    let palabra = palabras[i];

    if (conteo[palabra]) 
    {
        conteo[palabra] += 1;
    } 
    else 
    {
        conteo[palabra] = 1;
    }
}

console.log("El nombre:",conteo);


