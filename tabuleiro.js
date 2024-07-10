function writeChessBoard()
{
	let n = parseInt(prompt("Quantas linhas terá o tabuleiro?"));
	
	for(let i = 0; i < n; i++){
		if(i % 2 === 0){
			console.log("# # # # ");
		} else {
			console.log(" # # # #");
		}
	}
}
writeChessBoard()
