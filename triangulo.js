function writeNLines()
{
	let n = parseInt(prompt("Digite o número de linhas do triângulo"));
	let hstag = "#";
	for(let i = 0; i < n; i++)
	{
		hstag += "#";
		console.log(hstag);
	}
}
writeNLines();
