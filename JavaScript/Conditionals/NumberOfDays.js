let dayNumber = 2;
//  logic for checking the month no. 
if(dayNumber === 1 || dayNumber === 3 || dayNumber===5 || dayNumber===7 || dayNumber === 8 || dayNumber===10 || dayNumber===12){
    console.log(dayNumber," month contains 31 days");
    
} else if(dayNumber ===4 || dayNumber===6 || dayNumber===9 || dayNumber===11){
    console.log(dayNumber," month contains 30 days");
}else{
    console.log(dayNumber, "month contains 28 days");
    
}