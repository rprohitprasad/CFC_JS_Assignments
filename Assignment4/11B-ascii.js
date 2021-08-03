function subseq(str, str1="", ind = 0){
    if(ind == str.length){
        console.log(str1);
        return;
    }
    let ch = str[ind];
    let Ch = (ch.charCodeAt(0)).toString();
    subseq(str, str1, ind+1);
    subseq(str, str1+ch, ind+1);
    subseq(str, str1+Ch, ind+1);
}
let str = 'ab';
res = subseq(str);