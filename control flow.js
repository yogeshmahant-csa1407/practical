// if...else
    let num=0;
if(num>0){console.log(num,"the number is positive");}
else{console.log(num,"num is non-positive")};




// if...else if...else
let score = 15;
if (score>=90){console.log("grade = A");}
else if(score>=80){console.log("grade = B");}
else if(score>=70){console.log("grade = C");}
else if (score>=60){console.log("grade = D");}
else{console.log("fail")}





// nested if...else
let age=55;
let hasLicense=true;
if (age>=18){console.log("adult hai");
if (hasLicense){console.log("license hai drive kar sakta hai");}
else{console.log("adult hai par license nahi hai");}}
else{console.log("adult nahi hai")};




// ternary operator
let marks=55;
let result= (marks>=33) ? "pass" : "fail";
console.log(result);





// loops for
for (let i=1;i<=15;i++)
    {console.log("iteration number:",i);}




// while loop
let count=1;
while(count<=3){console.log("count is:",count);count++;}



// do...while loop
let n=1;
do{console.log("number is:",n);n++;}while(n<=3);



// switch case
let day=5;
switch(day){
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday"); break;
    default: console.log("Invalid day");
}