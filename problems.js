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

// runtime is O(n)
// space is O(n)

function hasUniqueChars(word){
    for (let i = 0; i < word.length-1; i++) {
        for (let j = i+1; j < word.length; j++){
            if (word[j] === word[i]) {
                return false
            }
        }
    }
    
    return true;
}

//runtime is O(n) 
//space is O(n)


function isPangram(sent){
    sent = sent.toLowerCase();
    let letter = new Set();
    for (characters of sent) {
        if (/[a-z]/.test (characters)) {
            letter.add(characters);
        }
    }
    return letter.size === 26;
}

// runtime is O(n) 
//space is O(n)

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
