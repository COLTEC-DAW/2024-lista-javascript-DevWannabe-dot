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
		// Se, após percorrer todo o array, nenhuma troca foi feita, abortar a ordenação
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

/**
 * (2k)+(2k) = 4k
 * (2k+1)+(2k+1) = 4k+2
 * (2k)+(2k+1) = 4k + 1
 * Se, e somente se o último bit da soma for 0, ambos são pares ou ambos são ímpares.
 */

function comp_crescente_impares(a, b)
{
	if(!(a+b & 1) && (a & 1)) return (a > b ? 1 : 0);

	return -1;
}
function comp_decrescente_pares(a, b)
{
	if(!(a+b & 1) && !(a & 1)) return (a < b ? 1 : 0);

	return -1;
}