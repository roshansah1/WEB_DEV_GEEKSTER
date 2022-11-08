//split method 


// split method without using inbuilt method

let arr = [5, 4, 1, 2, 0, 5]
let arr1 = ['c', 'b', 'a', 'q', 'x']
let arr2 = [[2], [5], [4], [1], [10]]
let arr3 = [{value : 3}, {value : 1}, {value : 10}, {value : 5}]

let obj = {
subjects : ['math', 'english' , 'hindi' , 'science'] ,
marks : [95, 80, 92, 88]
}

//console.log(arr1.sort());


console.log(obj.subjects.sort(function(a, b) {

    if(obj["subjects"].subarray(a) > obj["subjects"].subarray(b) ) {
       return 1;
       }else if(obj["subjects"].subarray(a)  === obj["subjects"].subarray(b) ) {
           return 0;
       }    else{
           return -1;
       }       
}))
