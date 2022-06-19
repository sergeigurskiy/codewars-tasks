// Tasks: Complete the function that accepts a string parameter, and reverses each word in the string.
// All spaces in the string should be retained.
function reverseWords(str) {
    let strReverse = str.split(' ').map(str => str.split('').reverse().join(''))
    return strReverse.join(' ')
}
