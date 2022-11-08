//14-09-2022
//for each method

//let arr = [1,2,3,4,5]

// arr.forEach(function(ele) {
//   console.log(ele);
// })

//let arr = [1,2,3,4,5]
// let sum = 0;
// for(let i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }

//console.log(sum);

// let arr = [1,2,3,4,5]
// let sum = 0;
// arr.forEach(ele) = (sum) + ele;    

// console.log(sum);


//reduce method

// let arr = [1,2,3,4,5]

// console.log(arr.reduce(function(sum, currentEle){
//      return sum + currentEle;
   
// },0))

// let arr = [1,2,3,4]
// console.log(arr.reduce(function(prevEle, currentEle, currIndex){
//     if(currIndex < arr.length/2){
//        return prevEle + currentEle
//        }else {
//           return prevEle * currentEle
//        }   
// },0))

// two types of for loop
let cars = ["BMW" , "FERRARI" , "AUDI" , "LAMBO"]

for(let car of cars) {
    console.log(car);
}

for(let Index in cars) {
    console.log(Index);
}
