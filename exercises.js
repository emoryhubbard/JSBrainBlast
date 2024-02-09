/*
If interested in how I figured out the order in which to teach
these exercises, it was through trial and error. Many of them
were intially too difficult. When I realized that
a student would have difficulty with certain areas, I created
additional exercises to help train a skill or concept to work on
before continuing with a difficult exercise. You can see
how I evolved the order of these exercises through the GitHub commits.
*/

/*
The first few exercises deal with basic language features, not algorithmic
thinking per se, but students can get hung up on the algorithmic
thinking exercises if they don't understand these features first. After
that, there's exercises for the algorithmic thinking skills--solving by hand, solving by code,
generalizing. Debugging and tracing skills will be used while you are working on
those problems as well. Then, exercises for function coding skills--
main skeleton coding and function skeleton coding--will follow. If you have
already progressed through these exercises and want a faster way to navigate,
you can search "how to write functions" to skip to function skeleton coding skill
exercises. Note that this file will be refactored to markdown
eventually to make navigation easier. I work on this project whenever I'm
teaching coding to my friends, so it is written as a working coding file for now. Some
exercises only exist in C++ in the CSSBrainBlast repository exercises.cpp
file, since I teach in multiple languages as the opportunity appears, but they can be easily
converted over to JavaScript without coding experience by using ChatGPT, and this
file will indicate when you can go there to get those exercises to maintain a logical skill
progression.
*/

/*
For the following exercise, you can use code similar to this to
access different parts of a string.
This program is not designed to do anything, each line just
demonstrates a different basic language feature. The lines
don't result in any visible output:
let myString = "Jackson"
myString[4]
myString.length
myString[myString.length - 1]
*/

/*
This program is designed to show you what is happening in each of
the lines given in the previous code block by printing them to the
console. You can use this technique to debug and check values,
(before learning how to use a debugger) and you can use it to print
user output:
let myString = "Jackson"
console.log(myString) // prints Jackson
console.log(myString[4]) // prints the fifth letter! Since 0 is first
console.log(myString.length) // prints 7, since 7 letters long
// subtract 1 to get last letter, since 6 gets the 7th letter
console.log(myString[myString.length - 1]) // prints last letter
console.log(prompt("Enter your word")) // prints the word you entered
*/

/*
How to do basic user input and ouput and combine strings:
let input = prompt("Enter your word: ")
console.log("You entered " + input) // prints what you entered
*/

/*
doubleString()
Input: any word the user specifies
Output: that word but "doubled", eg. "catcat" if input is "cat"
*/

/*
getSecondToLastLetter()
Input: any word the user specifies
Output: a single letter (the second-to-last letter of the word)
*/

/*In the example given below, two new words were created from the
existing words using their letters, "roar" (commented out) and
"broom". Study it to see how to make your own examples next.
*/

/*
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
*/

/*
Now, Make your own! Write a new program that has 3 different starting words,
and create two new words using their letters in a similar way. Don't
copy the code directly. Simply use it to see how you can access the
letter positions, which will change for you. 
It will be good practice for working with selecting letter positions
and making new strings out of the letters.
*/

/*
The following comments will introduce exercises for
improving your algorithm design skills. You can complete
them one after another. The initial one can be difficult,
but gives a good bird's eye view, and should be attempted.
Then, the ones that follow are easier, focusing on building
up skills to create functions that perform tasks just as
complicated as the string reversal tool, and standard
library functions.
*/

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
getLastTwoLetters()
Input: any word the user specifies
Output: last two letters, eg. "th" if word is "death"
This one seems pretty easy, but I've found it can be deceptively
difficult for some students.
If you skip exercises that "look easy" like this, just be aware that it
gets harder, and you can always go back to do ones you skipped to
increase your intelligence as needed.
*/

/*Write your own hasLetterExercises with different words, checking if
if they contain different letters.
*/

/*
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
}
*/

/*
After trying your own exercises, if you find it too difficult,
it is time to trace the code as shown here. Uncomment the table when you
make it or read it to help improve readability. Set first
line number to not be 12, but the line where the first "for" is
located, and adjust other lines accordingly (eg. "14" would be 2
higher than the first line number). Since the for loop loops,
you can keep adding line numbers to account for the additional
processing.
*/

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

/*
Tic Tac Toe Brain Blasts:
You can find these in the CPPBrainBlast repository, in the exercises.cpp file.
They can quickly and easily be converted to JavaScript through ChatGPT without
any coding experience.
*/

/*
Utility functions Brain Blast:
If you go down the path of learning functions early with the Tic Tac Toe Brain Blasts,
it is a good time to make a system so you can use those functions again in your
code later, building up your own private library of code. Every programmer should
have such personal functions they bring with them wherever they go. They
demonstrate that you are actually interested in and passionate in coding, and
care about finding more efficient ways to do things, and following the principle
of "it's your home, make it how you want it" in the workplace and in your personal
projects. In the CSSBrainBlast repository, you can find how to do that with C++, and
you can ask ChatGPT to convert that process to JavaScript by asking how to do the same
thing JavaScript, with no coding experience necessary.
*/

/*
Guessing game:
Make a game where you ask the user to guess a number between 0 and 100.
Tell them if it is higher or lower after each guess, or if they win, in
which case the program stops. The basic way to make a game is to look for
what actions are repeating, usually a chunk of actions, and when you
identify that repeating chunk, put it in a loop so it keeps repeating
until a certain condition is met. You generally can choose between using
a while loop and a for loop (which tend to be the most common, readable loops).
You make this choice based on what kind of condition you have. Is it
simply going to repeat up until a pre-determined number of times? Then
a for loop is best, because a counting increment system is built into the
for loop header.
Is it going to repeat up until some outside factor
changes or a particular user input that you can't predict in advance?
Then a while loop is best, because you don't need to specify an incrementing
in the while loop headaer. However, note that you can use either loop for
either case, for example with a while loop by putting incrementing logic
inside the loop body, or with a for loop by leaving the incrementing-related
statements blank (eg. for (; !gameOver; ) vs for (let i = 0; i<10; i++)
*/

/*
Traversing JSON data:
Ask ChatGPT
to create the credentials.json file for you by making up its own
usernames and passwords, and telling it will be used for the following
program: "Ask the user for a username. Then, ask the user for a password. Then,
read a file called credentials.json, looking for the username they
entered. If you find it, then look for the password associated with
that username. If the password the user entered matches this password,
then display a message saying the user is logged in and let the program
stop. If anything goes wrong, display a message telling the user to
check their username and password, and try again."
For this Brain Blast, simply practice accessing and viewing json
file structure. By using the code that follows. Note that you can also
open up the the link to the json file in the code directly in your
web browser to practice understanding json file structure. Try
accessing different parts of the data in your code and printing them
to the console. Then, change the code to access the credentials.json
file you made with ChatGPT, and some of its data. You should be able to
simply change url to equal 'credentials.json'.

async function getData(url) {
    const response = await fetch(url);
    const data = await convertToJson(response);
    return data.Result;
  }
async function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw {
      name: 'servicesError',
      message: await res.json()
    }
  }
}
const url = 'https://emoryhubbard.github.io/emorysleepoutside/src/public/json/tents.json'
const myJsonObject = await getData(url)
console.log('testing123')
console.log(myJsonObject)
*/

/*
User authentication:
Ask the user for a username. Then, ask the user for a password. Then,
read a file called credentials.json, looking for the username they
entered. If you find it, then look for the password associated with
that username. If the password the user entered matches this password,
then display a message saying the user is logged in and let the program
stop. If anything goes wrong, display a message telling the user to
check their username and password, and try again. My advice for this is
to just work on building the first steps, one at a time, until you get
to the try again part. Once you have that working, then you can wrap
your code in a loop of your choice to enable the repetition behavior
in case the user enters the wrong information. When you get to the
part where you need to read in the json file, recall how you were
able to access json data in the previous Brain Blast, and use the
same credentials.json file.
*/

/*
Once you have developed the ability to design your own basic algorithms
using solving by hand, solving by code, and generalizing, it is time
to learn how to write functions. That is, it is time to train your
skeleton coding skills. Specifically, you will
train your function skeleton coding skill and main skeleton coding
skill. This will enable you to tackle complex problems much more
easily and make your code readable and suitable for production.
*/

/*
Without function skeleton coding skill, if you are asked to make
a function like getIndexOfA, even if you have been given a sample
function structure to follow, and even if you know how to design
an algorithm to get the index of the letter "a" and print it,
you may not understand the purpose
of it, and your code will fail to return the needed value that you
were asked to return, or fail to use the needed value that you were
asked to take in, making your function not useful as a function, even
if the program runs and performs the correct user input and ouput.
*/

/*
Without main skeleton coding skill, if you are asked to make a program,
and asked to make a function for the program to use, you will be unable
to properly connect the two, or undertand where function code belongs,
and where main program code belongs, causing it to be mingled. It may
still run and perform the correct user input and output, but it will
confuse or worry other developers who don't expect the mingled structure.
*/

/*
Why We Use Functions Brain Blast
*/

/*
The next brain blast is going to demonstrate why we use functions. I'll be
designing a complex program very quickly by making use of them. Then, I'll
show how you can give others the assignment of creating those functions to
make it into a functional program. The majority of day-to-day
work you do as a developer will be either making such functions that your
colleagues or supervisor need, creating new features or fixing issues through
a simple list called a backlog, or debugging already-written code.
*/

/*
In addition, using functions allow separation of concerns, which as I said
before makes it easier to design complex programs by breaking them down into parts,
and makes them easier to debug, and more readable.
*/

/*
Converting to Functions Brain Blast
*/

/*
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

/*
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
*/

/*
Note how the function is called with the variable firstName, but its input
variable is simply named "input" in the function definition.
*/

//Examples of function output:
/*
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
*/

/*
Note how the function's output is stored into the variable "name", but its
output variable is simply named "output" in the function definition.
*/

/*
The following code was created as I showed how to begin building something like
a large financial app for a bank fairly quickly using the concept
of functions, as discussed above.
import {connectToDatabase, loadUserDatafromDatabse} from "./database.js";

renderLoginPage()
loginButton.addEventListener(loginUser)

function loginUser(e) {
    let DBConnection = connectToDatabase()
    let userData = loadUserDatafromDatabase(DBConnection)
    renderAccountPage(userData)
    if (userLikelyToDefault())
        renderDefaultNotification()
}
*/

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
*/

/*
When you get to the part that says Function Name: etc, that
is where you will do those exercises. However, I found that before
doing those exercises, it is very helpful to first go over how
to write the skeleton of a main program with your student with
preliminary exercises. First watch a demonstration of someone
writing the skeleton main code, then you practice it. Then,
watch a demonstration of someone writing the function skeleton
code, then you practice it.
*/

/*
The rules for the preliminary exercises
are that you have access to any function you can imagine, so
long as you give it the right input to know what to do. You
will want to implement those functions, but hold your horses.
Do a few of these first, pretending that the function skeleton
does the full operation. Here are some examples:
*/

/*
1. Ask the user for a word (he inputs "can"),
2. Then output to the user something like
"here is your word spelled backwards: nac"

*/

/*
let input2 = prompt("Please enter a word")
let output2 = reverseWord(input2)
console.log("Here is your word spelled backwards: " + output2)



function reverseWord(word) {
    let output = ""
    // code that reverse output . . .
    return output
}
*/

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
Function Name: getIndexOfA()
Function Input: any word that the programmer passes in
Function Output: word with missing first letter, eg. "at" if word is "cat"
*/

// Function-less code:

/*
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
*/

// Same code converted to have a function:

/*
pet = "cat";
friend = "emory";
code = "fun";


containA = false
oldWord = prompt("Enter a word: ") // user input

//   |                       |
//  \/ function output      \/ function input
index = getIndexOfA(oldWord)

console.log("does cat contain a?" + containA)
if (containA = true){
    console.log("OOO OOO, Monkey found A Monkey found A!!!!") // user output
    console.log("It's at index " + index + "!!!!")
}

function getIndexOfA(oldWord) { // function input
    for(let index=0; index <oldWord.length;index++){
        if (oldWord[index] == "a"){
            containA = true;
            return index; // function output
        }
    
    
    }
}
*/

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

/*
let customer = prompt("What is the customer's name? ")

let output = ""
for (let index = 0; index < customer.length; index++) {
    if (index != 0)
        output += customer[index]
}

console.log("The customer's name with the first letter removed is "
    + output)
*/

// Same code converted to have a function: [you do this part]

/* Algorithm Bonus pratice:
    removeWhitespace() can be implemented using a similar approach to the
    removeFirstLetter() function! Go back and implement it.

    Hints:
    
    Scroll to the right to get hints. Try on your own for 15 minutes,
    setting a timer. If you feel stuck, then you can look at the hints.
    Only take one at a time, just enough to get you unstuck. If you
    get stuck again, look at the next hint, and repeat as needed until you
    figure it out.                                                              Hints: 1. You can use it for inspiration, since the basic loop should work, but something in there will need to change.    2. The thing that will need to change will be the condition.
*/

/*
Function Name: getScrambled()
Function Input: any word that the programmer passes in
Function Output: scrambled version of word, eg. "tca" if word is "cat"
*/

// Function-less code:

/*
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
*/

// Same code converted to have a function: [you do this part]
/*
Function Name: containsString()
Function Input: any text that the programmer passes in
                + any target string that the programmer passes in
Function Output: true or false, true if text contains target

*/

// Function-less code:

/*
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
*/

// Same code converted to have a function: [you do this part]

/*
When you have trained your main skeleton coding and function skeleton
coding skills sufficiently through the preliminary exercises and
converting function-less code to have a function exercises, you are
ready to make your own functions from the list of possible exercises,
instead of just converting programs that already exist, and make main
programs that use them in some way, according to your own creativity.
*/

/*
Possible exercises:
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
replaceOsWithAs()
*/

/*
If you get stuck on any of these, remember to try to solve it without
functions first. Any of these exercises can be done without functions.
Then, when the user input and user output performs correctly for a
wide range of inputs, you are ready to refactor the code to use functions.
*/

/*
If you are still stuck on making your own functions, there are
several questions I've received while teaching them, and my answers
are further down below. However,
most questions actually come from a lack of a certain skill. If you
just answer the questions directly and clearly, the answers are likely
to not be understood and not useful, because the questions simply keep
coming in various other forms. You have determine where the student
is struggling in.
*/

/*
For example, does he actually understand how to design the
algorithm, but thinks he can't, when in reality it is because he is
simply missing understanding of a basic language feature like how to
access letters in a string? Then you need to revisit the initial
exercises at the beginning for such features (eg. accessing strings).
If he understands the language features, then he needs to revisit
the exercises that follow for solving by hand, solving with code, and
generalizing.
*/

/*
Is he struggling with function and main
skeleton coding, which is why he can't undestand how to make functions
return the desired values or use the desired input, or is he struggling
with designing the algorithm to actually do the job, or both? If
he is struggling with the algorithm itself, oustide of any requirement
to make a function to solve the problem, then you need to revisit and
practice solving by hand, solving with code, and generalizing. If he
understands that, then he needs to practice the main skeleton coding
exercises called preliminary exercises and the function sekelton coding
exercises where function-less code is converted to have functions.
*/

/*
Common questions I've received and answers I've provided are below,
but be aware that these are usually from a lack of a specific skill,
and usually not properly understood without addressing the root cause
by increasing the specific skill involved. Identify which skill that
is first, and practice to get it, as indicated above. Use these
questions and answers for helping to teach the skill in conjunction
with practicing the skill, based on your best deduction of what skill
is missing. These questions can help you figure out where the student
is struggling and which exercises he needs to do.
*/

/*
If you wanted to make a function like getIndexOfA, if you hit a in your loop, what would you want to do next?
One answer a student might give is to tell the user you are returning something, in which case you could use console.log() to simulate a print statement. Then what would you need to do? Return an integer, the value of the index where "a" is located. Note that since this is a utility function, you wouldn't actually want to do the input/ouput logic here, so you wouldn't tell the user you are returning something--you would just return it silently.
If you wanted to make a function like getIndexOfA, if you hit a in your loop, could you return the index by typing return name["a"]?
So how would you return the index of a?
*/

/*
After you've made code that can do the getIndexOfA function in theory,
for example by returning or printing the index of a in the previous exercise,
you can encounter difficulty turning it into a proper function that can
handle any function input, and any user input. You might ask "how can I
get input from the user?"
*/

/*
Usually, you want to get user input in main. The "main" in JavaScript is
just any code written outside of a function, like at the top of the file.
You can store the user input by doing something like
let input = prompt("Enter your word: ").
Then you can call your function with getIndexOfA(input).
*/

/*
You might ask "how can I insert the user information in the for loop?"
*/

/*
Usually you don't need to directly insert user information into the for loop.
Your function just takes any input word. You could call
console.log(getIndexOfA("cat")) and it would print 1 to the console,
without any user input at all. To handle user input, it is usually best for
your function to be designed like this, to handle information from any source.
Then you can just pass user information into it as needed. This is called
separation of concerns, which is the usual design method because it makes
it easier to design complex programs by breaking them down into parts, and makes
them easier to debug, and more readable.
*/


/*
Utility functions Brain Blast:
If you didn't go down the path of learning functions early with the Tic Tac Toe Brain Blasts,
and didn't do the following Utility functions Brain Blast,
it is a good time to make a system so you can use these functions you've written again in your
code later, building up your own private library of code. Every programmer should
have such personal functions they bring with them wherever they go. They
demonstrate that you are actually interested in and passionate in coding, and
care about finding more efficient ways to do things, and following the principle
of "it's your home, make it how you want it" in the workplace and in your personal
projects. In the CSSBrainBlast repository, you can find how to do that with C++, and
you can ask ChatGPT to convert that process to JavaScript by asking how to do the same
thing JavaScript, with no coding experience necessary.
*/








