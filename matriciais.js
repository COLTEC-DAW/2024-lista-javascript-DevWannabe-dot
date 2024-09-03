function criarMatriz(rows, cols, funcaoMatricial)
{
	let m = [];
	for(let i = 0; i < rows; i++){
		let currentRow = [];
		for(let j = 0; j < cols; j++){
			currentRow.push(funcaoMatricial(i, j));
		}
		m.push(currentRow);
	}
	return m;
}
function soma(i, j)
{
	return i + j;
}
function produto(i, j)
{
	return i * j;
}
function identidade(i, j)
{
	return i === j ? 1 : 0;
}
function quociente(i, j)
{
	return Math.pow(i, 2) / (j + 1);
}
function comparacao(i, j)
{
	return i > j ? 1 : (i < j ? 5 : 0);
}

linhas = 3;
colunas = 3;

console.table(criarMatriz(linhas, colunas, soma));
console.table(criarMatriz(linhas, colunas, produto));
console.table(criarMatriz(linhas, colunas, identidade));
console.table(criarMatriz(linhas, colunas, quociente));
console.table(criarMatriz(linhas, colunas, comparacao));