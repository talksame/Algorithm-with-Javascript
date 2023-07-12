const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


let input = []
let N, M;
let ground = [];
let check = [];

rl.on('line', (line) => {
	input.push(line.trim());
	[N, M] = input[0].trim().split(' ').map(Number);
	if (input.length === M + 2){
		rl.close();
	}
})

rl.on('close', () => {
	ground = input[1].split(' ').map(Number);
	check = new Array(N).fill(0);
	for (let i = 2; i < input.length ; i++ ){
		
		const [s, e] = input[i].split(' ').map(Number);
		ground = [
				...ground.slice(0, s - 1),
				...ground.slice(s - 1, e).map((x) => x + 1),
				...ground.slice(e)
			];
		check = [
				...check.slice(0, s - 1),
				...check.slice(s - 1, e).map((x) => x + 1),
				...check.slice(e)
			];
		
		if ((i-2) % 3 === 2){
			for (let j = 0; j < N ; j++){
				if (check[j] > 0){
					ground[j] -= 1;
				}
			}
			check = new Array(N).fill(0);
		}
		
	}
	console.log(ground.join(' '));
})