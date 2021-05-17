var qNa = [
    {question: "Chi ha fondato Spacex?" , solution: "elon musk"},
    {question: "In che anno è stata fondata la Apple" , solution: "1976"},
    {question: "Chi ha inventato il termine 'User Experience'? Rispondi senza abbreviare il nome." , solution: "donald norman"},
    {question: "Quanti anni ha compiuto Cristo nel 2000?" , solution: "2000"},
    {question: "Quanto ha fatturato Amazon nel 2018? Arrotonda alle decine (es. '120 miliardi')" , solution: "230 miliardi"}
]

var wrongAnswers = [];
var rightAnswers = [];

var score = 0;
var answer;
var questionsLeft = 5;

function printQuestions(array) {
    var ulTag = "<ul>";
    for ( var q = 0 ; q < array.length ; q++ ) {
        ulTag += "<li>" + array[q] + "</li>";
    }
    ulTag += "</ul>";
    document.write(ulTag);
}

for ( var i = 0 ; i < qNa.length ; i++ ) {
    answer = prompt(qNa[i].question + " [" + questionsLeft + " questions left]");
    answer = answer.toLowerCase();
    if ( answer == qNa[i].solution ) {
        alert("Bravone!");
        score++;
        rightAnswers.push(qNa[i].question);
    } else {
        alert("Sbagliato trollino :( prova con la prossima");
        wrongAnswers.push(qNa[i].question);
    }
    questionsLeft--;
}

document.write("Il tuo punteggio è di " + score + " punti!");
document.write("<br>");
document.write("<br>");
document.write("Ecco le domande a cui hai risposto bene:" + "<br>");
printQuestions(rightAnswers);
document.write("Ecco le domande a cui hai risposto male:" + "<br>");
printQuestions(wrongAnswers);