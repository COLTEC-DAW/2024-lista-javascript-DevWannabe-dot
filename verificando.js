function verify(n, condition)
{
	return condition(n);
}
/**
 * Prova: para uma raiz quadrada real m, n = m*m.
 * Dados dois fatores de n = a * b,
 * a * b = m * m implica a ou b deve sempre ser <= m.
 * Portanto, deve existir um i inteiro tal que i | n, ou n é primo.
 */
function ehPrimo(n)
{
	// Testa paridade
	if(n % 2 === 0 && Math.abs(n) != 2) return false;

	let sqrtN = Math.sqrt(n);

	for(let i = 3; i <= Math.round(sqrtN); i += 2)
	{
		if(n % i === 0) return false;
	}

	return (n === 1 ? false : true);
}
function ehImpar(n)
{
	return (n & 1) ? true : false;
}