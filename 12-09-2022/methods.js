//slice method
//splice method



let arr = ["Roshan" , "Manish" , "Mukesh" , "Rishi", 1 , 2, 3]

console.log(arr.slice(2, 3));  // (start , last index) // doesnt include last index
//console.log(arr);

console.log(arr.splice(2, 3));// (start , no. of elements)
//console.log(arr);




// arr.splice(0);

// console.log(arr);

//empty an array using splice

// let arr = [1,2,3,4,5,6,7,8]
// function emptyArr() {
 
//     arr.splice(0);
//     console.log(arr);
     
// }

// emptyArr();


// let arr = [1,2,3,4,5,6]

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr.slice(i,arr.length));
// }


// let arr1 = [1,2,3,4]

// let arr2 = [5,6,7,8]

// for(let i = 0; i < arr1.length; i++) {
    
//     console.log(arr1.slice(0,arr1.length-i) + "," + arr2.slice(0,i));
// }



