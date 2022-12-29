/* 
		**Guessing game**

	Present the user the following message:
	"From 0 to 10, guess which number i'm thinking of."

	Create a system to generate a random number
	and verify if the typed in number is the same as the random one.

	If the user isn't correct, show this message:
	"Error. Try again:"
	Keep showing this until they get it right.

	If the user is correct, show this message:
	"Well done! You guessed the number in x tries."
	Replace "x" with the number of tries it took to guess correctly.
 */

const randomNumber = Math.round(Math.random() * 10)
let guess = prompt("From 0 to 10, guess which number i'm thinking of.")
let attempt = 1

while (Number(guess) != randomNumber) {
	guess = prompt("Wrong. Try again:")

	attempt++
}

if (attempt == 1) {
	alert(`Well done! You guessed the number in 1 try.`)
} else {
	alert(`Well done! You guessed the number in ${attempt} tries.`)
}