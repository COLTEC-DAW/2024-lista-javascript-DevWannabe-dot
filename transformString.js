function transform(transformacao)
{
	return function(string) { return transformacao(string); };
}

function caixaAltaVogal(string)
{
	let result = '';

	for(let i = 0; i < string.length; i++){
		let charCodeAt_i = string.charCodeAt(i);
		let charAt_i = string.charAt(i);

		if(charCodeAt_i >= 97 && charCodeAt_i <= 122 &&
            (charAt_i === 'a' || charAt_i === 'e' || charAt_i === 'i' || charAt_i === 'o' || charAt_i === 'u')
        ){
			result += String.fromCharCode(string.charCodeAt(i)-26-6);
		} else {
			result += charAt_i;
		}
	}
	return result;
}

function caixaAltaConsoante(string)
{
	let result = '';

	for(let i = 0; i < string.length; i++){
		let charCodeAt_i = string.charCodeAt(i);
		let charAt_i = string.charAt(i);

		if(charCodeAt_i >= 97 && charCodeAt_i <= 122 &&
            (charAt_i != 'a' && charAt_i != 'e' && charAt_i != 'i' && charAt_i != 'o' && charAt_i != 'u')
        ){
			result += String.fromCharCode(string.charCodeAt(i)-26-6);
		} else {
			result += charAt_i;
		}
	}
	return result;
}

function caixaBaixaVogal(string)
{
	let result = '';

	for(let i = 0; i < string.length; i++){
		let charCodeAt_i = string.charCodeAt(i);
		let charAt_i = string.charAt(i);

		if(charCodeAt_i >= 65 && charCodeAt_i <= 90 &&
            (charAt_i === 'A' || charAt_i === 'E' || charAt_i === 'I' || charAt_i === 'O' || charAt_i === 'U')
        ){
			result += String.fromCharCode(string.charCodeAt(i)+26+6);
		} else {
			result += charAt_i;
		}
	}
	return result;
}

function caixaBaixaConsoante(string)
{
	let result = '';

	for(let i = 0; i < string.length; i++){
		let charCodeAt_i = string.charCodeAt(i);
		let charAt_i = string.charAt(i);

		if(charCodeAt_i >= 65 && charCodeAt_i <= 90 &&
            (charAt_i != 'A' && charAt_i != 'E' && charAt_i != 'I' && charAt_i != 'O' && charAt_i != 'U')
        ){
            result += String.fromCharCode(string.charCodeAt(i)+26+6);
		} else{
			result += charAt_i;
		}
	}
	return result;
}

let transforma = transform(caixaAltaVogal);
transforma("The quick brown fox jumps over the lazy dog");