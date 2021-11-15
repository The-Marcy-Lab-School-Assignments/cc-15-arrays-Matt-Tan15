//write your code here
function findLongestWord(arr) {
    let longest = "";
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (count < arr[i].length) {
            count = arr[i].length;
            longest = arr[i];
        }
    }
    
    return longest;
}

console.log(findLongestWord(["The","quick","brown", "fox", "jumped", "over", "the", "lazy", "dog"])); //returns "jumped"
console.log(findLongestWord(["jazzy", "jumpy", "quaky"])); //returns "jazzy"