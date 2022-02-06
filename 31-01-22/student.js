var obj={ 
    first_name:"veda",
    last_name:"rushi",
    age:21,
    email:"rvrkr33@gmail.com",
    student:[
           {
             name:"rohit",
             mark:21,
           },
           {
             name:"virat",
             mark:43,
           },
           {
             name:"bhavya",
             mark:23,
           },
           {
             name:"Ashok",
             mark:28,
           },
           {
             name:"rishi",
             mark:10,
           },
           {
             name:"pranathi",
             mark:34,
           },
           { 
             name:"rahul",
             mark:18, 
           },

]
};
var num=parseInt(prompt("Please enter a number"));
if(isNaN(num)){
  alert("Please enter a valid mumber");
} else{ 
   count=0;
   var studentlength=obj.student.length;   
   var num1=obj.student   
   for(var i=0; i<studentlength; i++){ 
        var score=(num1[i].mark);
        if(score>=num){ 
              console.log(obj.student[i].name);
              console.log(obj.student[i].mark);
              count++;
        }
   }
}
console.log(count+" student have scored equal to or more then those mark");