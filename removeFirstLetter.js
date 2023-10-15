let game = prompt("What is the name of the game? ")
let output = removeFirstLetter(game)
console.log("Your game with the first letter removed is:" + output)

function removeFirstLetter(word){
    output = ""
    for(let index = 0; index < word.length; index++){
        if(index != 0)
            output += word[index]
    } 
    return output
}