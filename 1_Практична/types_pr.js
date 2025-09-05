const a = [true, 'hello', 5, 12, -200, false, false, 'word']
const b = {}
for (let i = 0; i<a.length;i++){
    // console.dir(typeof a[i]);
    if (typeof a[i]=="boolean"){
        if (typeof b.boolean == "undefined"){
            b.boolean = 1
        } 
        else{b.boolean+=1}
    } else if (typeof a[i]=="string"){
        if (typeof b.string == "undefined"){
            b.string = 1
        } 
        else{b.string+=1}
    } else if (typeof a[i]=="number"){
        if (typeof b.number == "undefined"){
            b.number = 1
        } 
        else{b.number+=1}
    }
}
console.dir(b)