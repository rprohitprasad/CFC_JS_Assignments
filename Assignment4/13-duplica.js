function remDupli(str, ind = 0){
    if(ind == str.length-1){
        console.log(str);
        return str;
    }
    
    if(str[ind] == str[ind+1]){
        let newStr = str.slice(ind+2);
        let replaceStr = str.substring(0, ind);
        let modifiedStr = replaceStr + str[ind] + newStr;
        return emDupli(modifiedStr, ind);
    }
    return emDupli(str, ind+1);
}

let str = 'heeeello';
let res = emDupli(str);
