// Runtime is O(n)
// space is O(1)

function addToZero(array){
    
    result = 0;

    for (item of array) {
        result = item 
    }
    if (result === 0) {
        return true
    }
    else { 
        return false
    }   
}

// function hasUniqueChars runtime is O(n) and space is O(n)

function hasUniqueChars(word){
    for (let i = 0; i < word.length-1; i++) {
        for (let j = i+1; j < word.length; j++){
            if (j === i) {
                return false
            }
        }
    }
    
    return true;
}

//function isPangram runtime is O(n) and space is o(n)


function isPangram(s){
    let alphabet = [
        {a: 0, b: 0, c: 0,}
    ]
    for(char of s)
    {
        if(alphabet.includes(char.toLowerCase()))
        {
            alphabet.char.toLowerCase() ++
        }
    }
    for (letter of alphabet) {
        if (letter.value == 0) {
            return false
        }
    }
    return true
}

// function findLongestWord runtime is O(n) and space is O(1)

function findLongestWord(arr) {
    let arrSize = []

    for (let i = 0; i < arr.length; i++) {
        arrSize.push(arr[i].length)
    }

    let count = 0

    for (item of arrSize) {
        if (item > count) {
            count = item
        }
    }
    return count;
}



console.log(addToZero([1,-1]));
console.log(hasUniqueChars("Momndaay"));
console.log(isPangram("The quic brown fo jumps over the lazy dog!"));
console.log(findLongestWord(['hi', 'hello']));
