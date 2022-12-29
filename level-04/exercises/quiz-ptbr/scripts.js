// 1. Declare uma variável chamada weight

let weight


// 2. Que tipo de dado é a variável acima?

undefined


/* -----------------------------------------------------------------------------------------------
	3. Declare uma variável e atribua valores para cada um dos dados abaixo:
		* name: String
		* age: Number (integer)
		* stars: Number (float)
		* isSubscribed: boolean
 ------------------------------------------------------------------------------------------------- */ 
let name = "John"
let age = 28
let stars = 3.5
let isSubscribed = true


/* -----------------------------------------------------------------------------------------------
	4. A variável student abaixo é de que tipo de dado?
		let student = {};

		4.1. Atribua a ela as mesmas propriedades e valores do exercício 3.

		4.2. Mostre no console a seguinte mensagem:
			<name> de idade <age> pesa <weight> kg.	
			Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade da variável.	
 ------------------------------------------------------------------------------------------------- */		

Object

let student = {
	name: "John",
	age: 28,
	stars: 3.5,
	isSubscribed: true,
	weight: 88.7
}

// console.log(`${student.name}. De idade ${student.age}. Pesa ${student.weight} kg.`)


// 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o array vazio.

let students = []

/* ----------------------------------------------------------------------------------------------------------------------
6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no array).
 --------------------------------------------------------------------------------------------------------------------- */

students = [student]


// 7. Coloque no console o valor da posição zero do Array acima.

// console.log(students[0])


// 8. Crie um novo student e coloque na posição 1 do Array students

const matt = {
	name: "Matt",
	age: 30,
	stars: 4.8,
	isSubscribed: true,
	weight: 66
}

students[1] = matt


/* ----------------------------------------------------------------------------------------------------------------------
9. Sem rodar o código diga qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se acertou.

	console.log(a)
	var a = 1
 --------------------------------------------------------------------------------------------------------------------- */

undefined
/* Foi usada a palavra-chave "var" para declarar a varíavel "a". Então, devido ao hoisting, a varíavel é global. 
Mas como o console.log vem antes da atribuição de valor, até o momento que o comando do console é executado, a variável "a" não tem valor definido. 
Então o console mostra "undefined".
*/

// 10. Trocando a variável da questão 9 para "let", responda a mesma pergunta.

/* O console.log mostra nada, a aplicação dá erro de referência. 
Porque a variável "a" é criada após a execução da função. Então o console.log não consegue funcionar, pois o argumento que recebe ainda não foi definido. Ele é inválido.
*/
