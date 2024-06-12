function ehPalindromo()
{
	let stringArray = prompt("Insira a string a ser conferida:").split('');
	stringArray = stringArray.reverse();
	console.log(stringArray.join(''));
}
ehPalindromo();
