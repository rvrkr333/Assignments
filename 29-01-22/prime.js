var a = parseInt(prompt("Enter the number to check"));
var c=0;
for(var i=2;i<a;i++){
    if(a%i ==0){
        c=1;
    }
        
}
if(c==1){
  console.log("not prime");
}
else{
  console.log('prime');}