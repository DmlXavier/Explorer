/* Develop a program that has a menu and presents the following message:
  
  "Hello user! Type the number of the desired option."

    1. Register an item.
		2. Show registry.
    3. Leave menu.
  
  --- 
  The program has to take the number typed by the user and show the following scenarios:

  If the user chooses 1, they can register an item.
  If the user chooses 2, it shows the registered items.
		In case there aren't any, alert the user.
	If the user chooses 3, the program has to stop.

*/

let userName = prompt('Type in user name.')
let option
let items = []
let itemName

while (option != 5) {
	// Menu
	option = Number(prompt(`
	Hello ${userName}! Type in the number of the desired option.
	
	1. Register an item.
	2. Remove an item.
	3. Show registry.
	4. Change user name.
	5. Leave menu.
	`))

	// Check if input is a number.
	if (isNaN(option)) {
		alert('Error! Please type a number.')
		continue
	}
	
	// Behaviour for each input.
	switch (option) {
		case 1:
			itemName = prompt("What is the name of the item you'd like to register?")
			items.push(itemName)
			alert(`Confirmed. ${itemName} was registered.`)
			break
		
		case 2:
			itemName = prompt(`What is the name of the item you'd like to remove?
*Type "ALL" to remove all items.`)

			if (items.includes(itemName)) {
				items.splice(items.indexOf(itemName), 1)
				alert(`Confirmed. ${itemName} was removed from the registry.`)
			}
			else if (itemName == "ALL") {
				items.splice(0, items.length)
				alert(`Confirmed. All items were removed from the registry.`)
			} else {
				alert('Item is not registered.')
			}
			break
		
		case 3:
			if (items.length == 0) {
				alert('There are no registered items.')
			} else {
				alert(`${items}.`)
			}
			break

		case 4:
			userName = prompt('Type in user name.')
			break
		
		case 5:
			alert(`Goodbye ${userName}!`)
			break

		default:
			alert('Error! Invalid option.')
	}
}