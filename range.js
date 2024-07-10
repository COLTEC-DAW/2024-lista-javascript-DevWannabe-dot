function range(min, max, i)
{
	let rangeArray = [];

	for(let j = min+i; j < max; j += i){
		rangeArray[(j-(min+i)) / i] = j;
	}
	
	return rangeArray;
}