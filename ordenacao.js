function sort(array, comp)
{
	for(let i = 0; i < array.length - 1; i++){
		let swapped = false;
		for(let j = 0; j < array.length - 1 - i; j++){
			if(comp(array[j], array[j+1]) > 0){
				array[j] = array[j] ^ array[j+1];
				array[j+1] = array[j] ^ array[j+1];
				array[j] = array[j] ^ array[j+1];
				swapped = true;
			}
		}
		if(swapped === false) break;
	}

	return array;
}

function comp_crescente(a, b)
{	
	return (a > b ? 1 : 0);
}
function comp_decrescente(a, b)
{
	return (a < b ? 1 : 0);
}
function comp_crescente_impares(a, b)
{
	if((a & 1) && (b & 1)) return (a > b ? 1 : 0);

	return -1;
}
function comp_decrescente_pares(a, b)
{
	if((a+b & 1) === 0) return (a < b ? 1 : 0);

	return -1;
}