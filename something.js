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


    // After trying your own exercises, if you find it too difficult, it is time to trace the code as shown here
    line    index   name    containsO   name[index]=="o"
    12      undef   "emory" false       undef
    14      0       "emory" false       "emory"[0]=="o" -> "e"=="o" -> false // this is where you need to practice if you don't understand it--your turn. Use the expression at the top to figure it out in the next line. Don't copy this one.
    15      0       "emory" false       
    16
    14
    15
    16

    // If you wanted to make a function like getIndexOfA, if you hit a in your loop, what would you want to do next?
    // One answer a student might give is to tell the user you are returning something, in which case you could use console.log() to simulate a print statement. Then what would you need to do? Return an integer, the value of the index where "a" is located. Note that since this is a utility function, you wouldn't actually want to do the input/ouput logic here, so you wouldn't tell the user you are returning something--you would just return it silently.
    // If you wanted to make a function like getIndexOfA, if you hit a in your loop, could you return the index by typing return name["a"]?
    // So how would you return the index of a?
}

