function add(p,q){return(p+q);}
function sub(p,q){return(p-q);}
function mul(p,q){return(p*q);}
function div(p,q){if(q===0) return "cannot devide by zero"; return p/q;}

function calculator(p,operator,q){switch(operator){
  case"+": return add(p,q);
  case"-": return sub(p, q);
  case"*": return mul(p, q);
case"/": return div(p, q);
case"%": return mod(p, q);
default: return "Invalid Operator";}}

document.write(calculator(10,"+",5));
document.write("<br>")
document.write(calculator(10,"-",5));