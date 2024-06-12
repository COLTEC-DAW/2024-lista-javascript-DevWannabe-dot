function range(min, max, i)
{
	let rangeArray = [];

	for(let j = min+1; j < max; j += i){
		rangeArray[(j-(min+1)) / i] = j;
	}
	console.log(rangeArray);
}
