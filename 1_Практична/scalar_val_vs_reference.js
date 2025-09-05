function inc (anum){
    return anum+1
}
function inco (Num){
    Num.n+=1
}

const a= 5;
const b = inc(a);
console.dir({a,b});

const obj = {n:5}
inco(obj)
console.dir(obj)