/*
	Function Name: getScrambled()
	Function Input: any word that the programmer passes in
	Function Output: scrambled version of word, eg. "tca" if word is "cat"
	*/

	// Function-less code:

    /*
	let word = prompt("Choose any word: ")

	let length = unscrambled.length
	let positions = []
	// generate a list of positions, like [0, 1, 2, 3, 4] if word is "crate"
	for (let index = 0; index < length; index++) {
		positions[index] = index
	}
	// scramble the list, making it something like [3, 1, 0, 2, 4]
	for (let index = 0; index < length - 1; index++) {
		let position1 = index
		
		let position2 = Math.random() * (length - 1)
		position2 = Math.floor(position2)

		position1Value = positions[position1]
		position2Value = positions[position2]
		positions[position1] = position2Value
		positions[position2] = position1Value
	}

	let scrambled = ""
	// take each position, get the letter it represents, and make the word
	for (let index = 0; index < length; index++) {
		let position = positions[index]
		scrambled += unscrambled[position]
	}

	console.log("The scrambled version of the word is " + scrambled)
    */
    
    /***************************** */

    let input = prompt("Enter a word: ")
    let output = getScrambled(input)
    console.log("The scrambled version of the word is: " + output)

    function getScrambled(unscrambled) {
        let length = unscrambled.length
        let positions = []
        // generate a list of positions, like [0, 1, 2, 3, 4] if word is "crate"
        for (let index = 0; index < length; index++) {
            positions[index] = index
        }
        // scramble the list, making it something like [3, 1, 0, 2, 4]
        for (let index = 0; index < length - 1; index++) {
            let position1 = index
            
            let position2 = Math.random() * (length - 1)
            position2 = Math.floor(position2)

            position1Value = positions[position1]
            position2Value = positions[position2]
            positions[position1] = position2Value
            positions[position2] = position1Value
        }

        let scrambled = ""
        // take each position, get the letter it represents, and make the word
        for (let index = 0; index < length; index++) {
            let position = positions[index]
            scrambled += unscrambled[position]
        }

        return scrambled
    }