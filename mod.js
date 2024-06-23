function mod(num, modulus)
{
	if(modulus === 0){
		return false;
	}
	if(num > 1){
		return mod(num - modulus, modulus);
	}
	if(num === 0){
		return true;
	}
	return false;
}
function mod2(number)
{
	let tmp_mod = 2;

	// Propriedade da limitação (se d | a, |d| <= |a| ou d = 0)
	while(tmp_mod << 1 <= number){
		tmp_mod = tmp_mod << 1;
	}
	if(number > 1){
		return mod2(number - tmp_mod);
	}
	if(number === 1){
		return false;
	}
	return true;
}