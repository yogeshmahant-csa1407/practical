// bitwise and operator
document.write("bitwise and operator","<br>")
let a=1; 
let b=8;
document.write("let a=1;", "<br>")
document.write("let b=8;", "<br>")
//0001
//1000
//0000 =output 0
document.write("solution is = ", a&b, "<br>", "<br>");
// 0
// [Done] exited with code=0 in 0.07 seconds







// bitwise or operator
document.write("bitwise or operator","<br>")
let c=15; 
let d=20;
document.write("let c=15;", "<br>")
document.write("let d=20;", "<br>")
document.write("solution is = ", c|d, "<br>", "<br>");
//15=01111
//20=10100
//11111 =output 31







// bitwise not operator
document.write("bitwise not operator","<br>")
let e=21; 
let f=81; 
document.write("let e=21;", "<br>")
document.write("let f=81;", "<br>")
//21=0001
//81=1000
//e= 00000000000000000000000000010101=
//~e=11111111111111111111111111101010=
document.write("solution is = ", ~e, "<br>", "<br>");
//11111111111111111111111111101010 =output -22







// bitwise xor operator
document.write("bitwise xor operator","<br>")
let g=4;
let h=2;
document.write("let g=4;", "<br>")
document.write("let h=2;", "<br>")
//0100
//0010
//6=0110
document.write("solution is = ", g^h, "<br>", "<br>");
//0110 output=6







// bitwise right shift operator
document.write("bitwise left shift operator","<br>")
let i=10;
let j=2;
document.write("let i=10;", "<br>")
document.write("let j=2;", "<br>")
//10=110
document.write("solution is = ", 10>>2, "<br>", "<br>");
//   0000000000000000000000000000001010
// >>0000000000000000000000000000000010=2







// bitwise left shift operator
document.write("bitwise right shift operator","<br>")
let k=23;
let l=2;
document.write("let k=23;", "<br>")
document.write("let l=2;", "<br>")
//23=10111
document.write("solution is = ", 23<<2, "<br>", "<br>");
//23= 0000000000000000000000000000010111
// << 0000000000000000000000000001011100=92







// bitwise unsigned right shift operator
document.write("bitwise unsigned right shift operator","<br>")
let m=10;
let n=2
document.write("let m=10;", "<br>")
document.write("let n=2;", "<br>")
//   0000000000000000000000000000001010
document.write("solution is = ", m>>>n, "<br>", "<br>");
//   0000000000000000000000000000001010
//   0000000000000000000000000000000010