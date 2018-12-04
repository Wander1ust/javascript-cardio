// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {

  // SOLUTION 1 - Return a single longest word

  // Create filtered array using R.E
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

  const sorted = wordArr.sort((a,b) => b.length - a.length);

  const longestWordArr = sorted.filter((word) =>
   word.length === sorted[0].length);

    if(longestWordArr.length === 1) {
        return longestWordArr[0];
    } else {
        return longestWordArr
     }
    }






// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
// Init chunked array
const chunkedArr = []
// Set index
let i = 0;
// Loop while index less than array length
while(i < arr.length) {
    //Slice out from index to index + chunk length. Push to chkd array.
     chunkedArr.push(arr.slice(i, i+len));
    // Increment by chunk length
    i += len;
    }
    return chunkedArr;
}
// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
    return arrays.reduce(function(a,b) {
    return a.concat(b);
    });
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
   
    return formatStr(str1) === formatStr(str2)

}

//helper function
function formatStr(str) {
    return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('')
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {


}

// Call Function
const output = isAnagram('below','elbow');

console.log(output);
