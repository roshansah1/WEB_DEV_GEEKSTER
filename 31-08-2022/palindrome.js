
let str = "agha";
function palindrome(str) {
for(let i = 0; i < str.length/2; i++) {
     if(str.charAt(i) !== str.charAt(str.length-1-i)) {
          return "not palindrome"
        }
}
    return "palindrome";
    }

let newStr = palindrome(str);

console.log(newStr);

