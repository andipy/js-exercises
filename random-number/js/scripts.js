var numSup = prompt("Inserisci il limite superiore");
numSup = parseInt(numSup);

var numInf = prompt("Inserisci il limite inferiore");
numInf = parseInt(numInf);

var numRandom = Math.floor(Math.random() * (numSup - numInf + 1)) + numInf;

document.write(numRandom);