let a = 0;
let b = 3;
let lhs = (a + b)**3;
let rhs = (a)**3 + (b)**3 + (3 * (a)**2 * (b)) + (3 * a * (b)**2);
if(lhs === rhs){
    console.log("Verified");
    
}else{
    console.log("Not Verified");
    
}