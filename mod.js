function mod(num, modulus)
{
	if(num > 1){
		return mod(num - modulus);
	}
	if(num === 1){
		return false;
	}
	return true;
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
