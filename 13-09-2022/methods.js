// let arr1 = [1,2,3,4]

// let arr2 = [5,6,7,8]

// console.log(arr1);
// for(let i = 0; i < arr1.length; i++) {
    
//     arr1.splice(arr1.length-1);
    
// }


// remove even elements from an array

let arr = [1,2,2,3,4,5]
// let temp = [];
// for(let i = 0 ; i < arr.length; i++) {
//   if(arr[i] % 2 !== 0){
//     temp.push(arr[i]);
//   }
// }
// console.log(temp);

// map method

console.log(arr.map(ele => ele / 2));

//filter method

console.log(arr.filter(ele => ele % 2 !== 0));


// arr.map(function(element,index, array) {
//     console.log(element,index,array)
// })