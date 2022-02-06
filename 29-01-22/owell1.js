var str=prompt("Enter a string");
var str1=str.split("");
console.log(str1);
var c=0;
for(var i=0; i<str1.length; i++){
    if(str[i]  == 'a' ||str[i]  == 'a' ||str[i]  == 'e' ||str[i]  == 'E' ||str[i]  == 'i' ||str[i]  == 'I' ||str[i]  == 'o' ||str[i]  == 'O' ||str[i]  == 'u' ||str[i]  == 'U' ){
        c+=1;
    }

}
console.log("total no of vowel is "+ c);