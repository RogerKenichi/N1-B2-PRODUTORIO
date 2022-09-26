Nomes:  Roger Kenichi		081190026
	 	Yago Caetano		081190027

A API funciona com duas rotas para a realização da operação:
	• Iterativa (http://localhost:3333/iterativo)
	• Recursiva (http://localhost:3333/recursivo)

Para realizar uma chamada, são necessários dois parâmetros: O valor "m" (índice inicial) e "n" (índice final).
Ex:	http://localhost:3333/iterativo?m=1&n=3
	http://localhost:3333/recursivo?m=2&n=5

Para iniciar a aplicação, basta executar o comando "npm install" (para importar os módulos, caso seja a primeira vez que a aplicação for executada) e executar o comando "npm start" para iniciar.

A API está configurada para rodar localmente na porta 3333.