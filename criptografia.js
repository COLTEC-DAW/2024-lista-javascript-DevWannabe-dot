function criptografia(cifra)
{
	return function(string, n){
		return cifra(string, n);
	}
}
function cifraDeCesar(string, n)
{
	let resultStr = '';

	for(let i = 0; i < string.length; i++){
			let charCode = string.charCodeAt(i);

			if(charCode >= 65 && charCode <= 90){
				resultStr += String.fromCharCode(((charCode - 65 + n) % 26) + 65);
			} else if (charCode >= 97 && charCode <= 122){
				resultStr += String.fromCharCode(((charCode - 97 + n) % 26) + 97);
			} else {
				resultStr += string.charAt(i);
			}
		}

	return resultStr;
}
cif = criptografia(cifraDeCesar);
cif("The quick brown fox jumps over the lazy dog", 5);