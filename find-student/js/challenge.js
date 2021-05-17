var students = [
    {
        name: 'felpato',
        age: 23,
        courses: ['design' , 'illustration'],
        mail: 'felpato@gmail.com'
    },
    {
        name: 'robotico',
        age: 24,
        courses: ['informatica' , 'data science'],
        mail: 'robotico@gmail.com'
    },
    {
        name: 'molle',
        age: 22,
        courses: ['matematica' , 'statistica'],
        mail: 'molle@gmail.com'
    },
    {
        name: 'feriuelli',
        age: 22,
        courses: ['filosofia' , "storia dell'srte"],
        mail: 'feriuelli@gmail.com'
    }
];

/*
var message = "";
var student;

function print(mes) {
    var divToUse = document.getElementById("my-div");
    divToUse.innerHTML = mes;
}

function forInLoop(obj) {
    for ( var properties in obj ) {
        document.write(message + properties + ": " + obj[properties] +"<br>");
    }
}

for (var i = 0 ; i < students.length ; i++) {
    student = (students[i]);
    forInLoop(student);
}
*/

var clientRequest;
var student;

function print(mex) {
    var containerDiv = document.getElementById("my-div");
    containerDiv.innerHTML = mex;
}

function studentReport(alumn) {
    var report = "<h2>Student: " + alumn.name + "</h2>";
    report += "<p>Age: " + alumn.age + "</p>";
    report += "<p>Course: " + alumn.courses + "</p>";
    report += "<p>Mail: " + alumn.mail + "</p>";
    return report;
}

while ( clientRequest != "esci" ) {
    clientRequest = prompt("Digita il nome dello studente per trovarlo nel database. Digita 'esci' per uscire dal programma.");
    clientRequest = clientRequest.toLowerCase();
    
    for ( var i = 0 ; i < students.length ; i++ ) {
        student = students[i];
        if ( clientRequest === students[i].name ) {
            print(studentReport(student));
        }
    }    
}