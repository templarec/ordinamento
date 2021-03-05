
var array = [];

var numElementi = parseInt(prompt("Inserisci numero di elementi array"));


console.log("Genero array con elementi casuali: ");
for (var i = numElementi; i > 0; i--){
	array.push(Math.floor(Math.random()*numElementi));
}
var array1 = array.slice();
var array2 = array.slice();
var array3 = array.slice();
console.log("Array di partenza: " + array1);
console.log("................................");
console.log("Ordinamento array con algoritmo a doppio for con sostituzione:")
var numIter = 0;
var numScambi = 0;

for (var i=0;i<array1.length -1; i++){
	for (var j=0; j < array1.length - 1; j++){
		if (array1[j] > array1[j+1]){
			var temp = array1[j];
			array1[j]=array1[j+1];
			array1[j+1] = temp;
			console.log(i,j,array1);
			numScambi++;
		}
		numIter++;

	}
	numIter++;
}
console.log("Numero iterazioni: " + numIter);
console.log("Numero scambi: " + numScambi);
console.log("................................");
numScambi = 0;
numIter = 0;
console.log("Ordinamento array con algoritmo BubbleSort:");

//ordino con bubble sort:
do {// faccio lo scambio fino alla penultima posizione dell'array
	// scambio l'iesimo indice con il suo successivo se Ã¨ maggiore
	// fino al penultimo perchÃ¨ ad ogni scansione dell'array il piÃ¹ grande va in fondo
	// finchÃ¨ non ho piÃ¹ scambi da fare (cioÃ¨ l'array Ã¨ ordinato)
	var scambio = false;
	for (i = 0; i < array2.length - 1; i++) {
		if (array2[i] > array2[i + 1]) {
			var appoggio = array2[i];
			array2[i] = array2[i + 1];
			array2[i + 1] = appoggio;
			scambio = true;
			numScambi++;
			console.log(array2);
		}
		numIter++;

	}
	numIter++;

} while (scambio);

console.log("Numero iterazioni bbs: " + numIter);
console.log("Numero scambi bbs: " + numScambi);
console.log("................................");
console.log("Ordinamento array con algoritmo di Raffa:");
numScambi = 0;
numIter = 0;
for (var i = 0; i < array3.length - 1; i++) {
	for (var j = i + 1; j < array3.length; j++) {
		if (array3[i] > array3[j]) {
			var numeroTemp = array3[i]; //salvo valore in variabile temporanea
			array3[i] = array3[j]; // salvo successivo su precedente
			array3[j] = numeroTemp; //salvo temporanea su successivo
			numScambi++;
			console.log(i,j,array3);
		}
		numIter++;
	}
	numIter++;
}

console.log("Numero iterazioni Raffa: " + numIter);
console.log("Numero scambi Raffa: " + numScambi);