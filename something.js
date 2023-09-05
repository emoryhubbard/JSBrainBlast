//output = document.querySelector(".output")
//output.innerHTML = writeMyWord()
hasLetterExercises()

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

function writeMyWord() {
    let name = "emory"
    let pet = "cat"
    let president = "biden"
    let array1 = [1, 2, 3, 4];
    let months = ['March', 'Jan', 'Feb', 'Dec'];

    // roar

    // let myWord = name[3] + name[2] + pet[1] + name[3];

    // broom

    let myWord = president[0] + name[name.length - 2]
    + name[name.length - 3] + name[name.length - 3] + name[name.length - 4];

    return myWord;
}