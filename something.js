// Code for producting output on page:
//output = document.querySelector(".output")
//output.innerHTML = writeMyWord() //replace with your function

//Code for running a stand-alone function
hasLetterExercises() // replace with your function

// The following comments will introduce exercises for
// improving your algorithm design skills. You can complete
// them one after another. The initial one can be difficult,
// but gives a good bird's eye view, and should be attempted.
// Then, the ones that follow are easier, focusing on building
// up skills to create functions that perform tasks just as
// complicated as the string reversal tool, and standard
// library functions.

/*
reverseString()
Input: any word the user specifies
Output: that word spelled backwards
This is also a great initial exercise for teaching algorithm design.
It can be a big leap conceptually to do it from scratch, but working
through it with a student allows them to get a bird's eye view
of how to create an algorithm from scratch. For what this process
looks like, see this video for an introduction into the process by
showing how to build a word splicing tool:
https://youtu.be/WKuqDFxxrUs
Then, if you still need more help, see this video for how to
make the reverse string tool, but only as much as you need:
https://youtu.be/K1yVXez0zuA
*/


/*
doubleString()
Input: any word the user specifies
Output: that word but "doubled", eg. "catcat" if input is "cat"
*/

/*
getLastLetter()
myString[4]
myString.length
myString[myString.length - 1]
Input: any word the user specifies
Output: just a single letter
*/

/*
getLastTwoLetters()
Input: any word the user specifies
Output: last two letters, eg. "th" if word is "death"
This one seems pretty easy but it will be good practice for working with selecting letter positions and making new strings out of the letters
If you struggle with it, try practing 
*/

function writeMyWord() {
    let name = "emory"
    let pet = "cat"
    let president = "biden"
    let array1 = [1, 2, 3, 4]; // just to demonstrate how to create arrays of other things, not just letters
    let months = ['March', 'Jan', 'Feb', 'Dec']; // same reason as above

    // roar

    // let myWord = name[3] + name[2] + pet[1] + name[3];

    // broom

    let myWord = president[0] + name[name.length - 2]
    + name[name.length - 3] + name[name.length - 3] + name[name.length - 4];

    return myWord;
}

// To write your own hasLetterExercises with different words, checking if
// if they contain different letters.

function hasLetterExercises() {
    let name = "emory"
    let pet = "cat"
    let president = "biden"

    // does "emory" contain o?

    let containsO = false

    for (let index=0; index < 4; index++) {
        if (name[index] == "o")
            containsO = true
    }

    console.log("does emory contain o? " + containsO)

    // does "cat" contain z?

    let containsZ = false

    for (let index=0; index < pet.length; index++) {
        if (pet[index] == "z")
        containsZ = true
    }

    console.log("does cat contain z? " + containsZ)


    // After trying your own exercises, if you find it too difficult,
    // it is time to trace the code as shown here. Uncomment the table when you
    // make it or read it to help improve readability.
    /*
    line    index   name    containsO   name[index]=="o"
    12      undef   "emory" false       undef
    14      0       "emory" false       "emory"[0]=="o" -> "e"=="o" -> false // this is where you need to practice if you don't understand it--your turn. Use the expression at the top to figure it out in the next line. Don't copy this one.
    15      0       "emory" false       
    16
    14
    15
    16
    */
}

// If you wanted to make a function like getIndexOfA, if you hit a in your loop, what would you want to do next?
// One answer a student might give is to tell the user you are returning something, in which case you could use console.log() to simulate a print statement. Then what would you need to do? Return an integer, the value of the index where "a" is located. Note that since this is a utility function, you wouldn't actually want to do the input/ouput logic here, so you wouldn't tell the user you are returning something--you would just return it silently.
// If you wanted to make a function like getIndexOfA, if you hit a in your loop, could you return the index by typing return name["a"]?
// So how would you return the index of a?

/*
After you've made code that can do the getIndexOfA function in theory,
for example by returning or printing the index of a in the previous exercise,
you can encounter difficulty turning it into a proper function that can
handle any function input, and any user input. You might ask "how can I
get input from the user?"

Usually, you want to get user input in main. The "main" in JavaScript is
just any code written outside of a function, like at the top of the file.
You can store the user input by doing something like
let input = prompt("Enter your word: ").
Then you can call your function with getIndexOfA(input).

You might ask "how can I insert the user information in the for loop?"

Usually you don't need to directly insert user information into the for loop.
Your function just takes any input word. You could call
console.log(getIndexOfA("cat")) and it would print 1 to the console,
without any user input at all. To handle user input, it is usually best for
your function to be designed like this, to handle information from any source.
Then you can just pass user information into it as needed. This is called
separation of concerns, which is the usual design method because it makes
it easier to design complex programs by breaking them down into parts, and makes
them easier to debug, and more readable.

Why We Use Functions Brain Blast

The next brain blast is going to demonstrate why we use functions. I'll be
designing a complex program very quickly by making use of them. Then, I'll
show how you can give others the assignment of creating those functions to
make it into a functional program. The majority of day-to-day
work you do as a developer will be either making such functions that your
colleagues or supervisor need, creating new features or fixing issues through
a simple list called a backlog, or debugging already-written code.

In addition, using functions allow separation of concerns, which as I said
before makes it easier to design complex programs by breaking them down into parts,
and makes them easier to debug, and more readable.

Converting to Functions Brain Blast

Something we need to cover is the difference between function input and user
input. We also need to cover how to create your own functions, since this is
the form your code is going to take in the real world.
To see that difference, and to learn how to create your own functions,
we are going to go through the process of converting
code that isn't functions into functions and calling it. Before, when we
had a brain blast, you would be given a function name describing what your
code should do, an input, and an output. Usually we would write that output
to the screen or the console as user output. For these exercises, you will
be given code that does what is needed using user input and user output.
However, you will need to convert it into functions that use function input
and function output instead.
*/

let firstName = "clark"

//Examples of user input:
let input = prompt("Enter a word: ")

//Examples of user output:
console.log("Your input was " + input)

//Examples of function input:
let username = capitalizeWord(firstName) //<-------firstName is input
function capitalizeWord(input) {     //<-------input is input
    let output = ""
    if (word[0] == "a")
        output += "A"
    if (word[0] == "b")
        output += "B"
    // ...
    for (let index = 1; index < input.length - 1; index++) {
        output += input[index]
    }
    return output
}

/*
Note how the function is called with the variable firstName, but its input
variable is simply named "input" in the function definition.
*/

//Examples of function output:
username = capitalizeWord(firstName) //<------- name is output
function capitalizeWord(input) {
    let output = ""
    if (input[0] == "a")
        output += "A"
    if (input[0] == "b")
        output += "B"
    // ...
    for (let index = 1; index < input.length - 1; index++) {
        output += input[index]
    }
    return output                    //<------- output is output
}

/*
Note how the function's output is stored into the variable "name", but its
output variable is simply named "output" in the function definition.
*/

/*
The following code was created as I showed how to begin building something like
a large financial app for a bank fairly quickly using the concept
of functions, as discussed above.
import {connectToDatabase, loadUserDatafromDatabse} from "./database.js";

while (sessionOver != true) {
    renderLoginPage()
    loginButton.addEventListener(connectToDatabase)
    let DBConnection = connectToDatabase()
    let userData = loadUserDatafromDatabase(DBConnection)
    renderAccountPage(userData)
    if (userLikelyToDefault())
        renderLoanNotification()
}
*/

//DON'T DO THIS: pageObject.renderPage(account.info())

/*
During the following code exercises, you will be given
function-less code that you will convert to have a function. The
code within this comment is an example of function-less
code, and the code after this comment is an example of
what it should like when converted, with a new function
defined and used. They key is keeping
track of user inputs, user outputs, function inputs, and
function outputs, and properly selecting your function
input and output variables and statements.

When you get to the part that says Function Name: etc, that
is where you will do those exercises. However, I found that before
doing those exercises, it is very helpful to first go over how
to write the skeleton of a main program with your student with
preliminary exercises. First watch a demonstration of someone
writing the skeleton main code, then you practice it. Then,
watch a demonstration of someone writing the function skeleton
code, then you practice it.

The rules for the preliminary exercises
are that you have access to any function you can imagine, so
long as you give it the right input to know what to do. Here
are some examples:

*/

/*
1. Ask the user for a word (he inputs "can"),
2. Then output to the user something like
"here is your word spelled backwards: nac"

*/

let input2 = prompt("Please enter a word")
let output2 = reverseWord(input2)
console.log("Here is your word spelled backwards: " + output2)



function reverseWord(word) {
    let output = ""
    /* . . . */
    return output
}

/*
1. Ask the user for a sentence (he inputs "Hi, my name is Tyler.")
2. Then output to the user something like
"here is what you wrote without spaces: "Hi,mynameisTyler."
*/
/*
Now that you've done the preliminary exercies, here are the
function conversion exercises (see the explanation before
the preliminary exercises if you need to remember what to do):
*/

/*
Function Name: removeFirstLetter()
Function Input: any word that the programmer passes in
Function Output: word with missing first letter, eg. "at" if word is "cat"
*/

// Function-less code:

let pet = "cat";
let friend = "emory";
let code = "fun";


let containA = false
let indexOfA = 0

for(let index=0; index <pet.length;index++){
    if (pet[index] == "a"){
        containA = true;
        indexOfA = index;
        // return index; use this line later when making a function
    }


}
console.log("does cat contain a?" + containA)
if (containA = true){
    console.log("OOO OOO, Monkey found A Monkey found A!!!!")
    console.log("It's at index " + indexOfA + "!!!!")
}

// Same code converted to have a function:

pet = "cat";
friend = "emory";
code = "fun";


containA = false
oldWord = prompt("Enter a word: ") // user input

//   |                       |
//  \/ function output      \/ function input
index = getIndexOfLetterA(oldWord)

console.log("does cat contain a?" + containA)
if (containA = true){
    console.log("OOO OOO, Monkey found A Monkey found A!!!!") // user output
    console.log("It's at index " + index + "!!!!")
}

function getIndexOfLetterA(oldWord) { // function input
    for(let index=0; index <oldWord.length;index++){
        if (oldWord[index] == "a"){
            containA = true;
            return index; // function output
        }
    
    
    }
}

/* Debug Bonus practice!
    There are a couple of bugs in the previous function-less and
    function-full code examples.
    Find and fix them!
*/

/*
Function Name: removeFirstLetter()
Function Input: any word that the programmer passes in
Function Output: word with missing first letter, eg. "at" if word is "cat"
*/

// Function-less code:

let customer = prompt("What is the customer's name? ")

let output = ""
for (let index = 0; index < customer.length; index++) {
    if (index != 0)
        output += customer[index]
}

console.log("The customer's name with the first letter removed is "
    + output)

// Same code converted to have a function: [you do this part]

/*
	Function Name: getScrambled()
	Function Input: any word that the programmer passes in
	Function Output: scrambled version of word, eg. "tca" if word is "cat"
	*/

	// Function-less code:

	let word = prompt("Choose any word: ")

	let length = word.length
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
		scrambled += word[position]
	}

	console.log("The scrambled version of the word is " + scrambled)

	// Same code converted to have a function: [you do this part]
/*
Function Name: containsString()
Function Input: any text that the programmer passes in
                + any target string that the programmer passes in
Function Output: true or false, true if text contains target

*/

// Function-less code:

word = prompt("Enter a phrase or long text: ")
target = prompt("The previous text will be checked to see if it contains "
    + "a target string. What target string would you like to check for? ")

let containsTarget = false
for (let index = 0; index < word.length; index++) {
    let stillMatching = true
    // check each letter of the target until it stops matching
    for (let targetIndex = 0; targetIndex < target.length; targetIndex++) {
        // eg. if word is "crate" and target is "ate",
        // and we are on "a", check if word[2 + 0] == target [0]
        // which reduces to "a" == "a"
        if (stillMatching && word[index + targetIndex] == target[targetIndex])
            stillMatching = true
        else
            stillMatching = false
    }
    if (stillMatching)
        containsTarget = true
}

console.log("Did the text contain the target string? " + containsTarget)

// Same code converted to have a function: [you do this part]



/*
getLength()
getReverse()
getUppercase()
getLowercase()
removeFirstLetter()
removeLastLetter()
addMr()
removeTitle()
removeWhitespace()
hasLetterA()
getScrambled()
find() or getPositionOf()
containsString()
swapItems() eg. swapItems(1, 3) on items for array [0, 1, 2, 3, 4]
*/










