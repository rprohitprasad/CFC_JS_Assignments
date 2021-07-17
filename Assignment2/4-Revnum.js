function revnum(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(revnum(32243));