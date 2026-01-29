// bitwise and operator
let a=1; 
let b=8; 
//0001
//1000
//0000 =output 0
console.log(a&b);
// 0
// [Done] exited with code=0 in 0.07 seconds







// bitwise or operator
let c=15; 
let d=20; 
console.log(c|d)
//15=01111
//20=10100
//11111 =output 31







// bitwise not operator
let e=21; 
let f=81; 
//21=0001
//81=1000
//e= 00000000000000000000000000010101=
//~e=11111111111111111111111111101010=
console.log(~e);
//11111111111111111111111111101010 =output -22







// bitwise xor operator
let g=4;
let h=2;
//0100
//0010
//6=0110
console.log(g^h);
//0110 output=6







// bitwise right shift operator
let i=10;
let j=2;
//10=110
console.log(10>>2);
//   0000000000000000000000000000001010
// >>0000000000000000000000000000000010=2







// bitwise left shift operator
let k=23;
let l=2;
//23=10111
console.log(23<<2)
//23= 0000000000000000000000000000010111
// << 0000000000000000000000000001011100=92







// bitwise unsigned right shift operator
let m=10;
let n=2
//   0000000000000000000000000000001010
console.log(m>>>n)
//   0000000000000000000000000000001010
//   0000000000000000000000000000000010
