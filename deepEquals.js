function deepEquals(obj1, obj2)
{
	if (obj1 === obj2) return true;	// Caso forem o mesmo objeto na memória
	// Confere se a comparação é compatível
	if ((typeof(obj1) == "object" && obj1 != null) && (typeof(obj2) == "object" && obj2 != null)){
		// Confere se a quantidade de membros é a mesma
		if (Object.keys(obj1).length != Object.keys(obj2).length) return false;
		for(let prop in obj1){
			if(Object.hasOwn(obj2, prop)){
				if(!deepEquals(obj1[prop], obj2[prop])) return false;
			} else return false;
		}
		return true;	// Se chegou até aqui, tudo bem
	}
	return false;
}
