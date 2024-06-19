// Resolução por algoritmo de Euclides, permite a entrada de números muito maiores, com complexidade O(log(min(a, b)))
function mod(num, modulus)
{
	if(num === 0){
		return (modulus === 1 ? false : true);
		// MDC(num, modulus) === 1 ? primos_entre_si : compostos_entre_si
	}
	return mod(modulus % num, num);
}

function mod2(number)
{
	if(number > 1){
		return mod2(number - 2);
	}
	if(number === 1){
		return false;
	}
	return true;
}