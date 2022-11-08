//set time-out
//set Interval

let count = 1;

let clock = setInterval(() => {
        console.log(count)
       if(count === 10){
          clearInterval(clock)
          }
    count++
},1000)