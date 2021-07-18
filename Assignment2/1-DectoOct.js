
function decToOct(n)
{
	
	let octalNum = new Array(100);

	let i = 0;
	while (n != 0) {

	
		octalNum[i] = n % 8;
		n = Math.floor(n / 8);
		i++;
	}

	for (let j = i - 1; j >= 0; j--)
		console.log(octalNum[j]);
}
    let n = 453;
	decToOct(n);
