var message = '';
var student;
var ask;


//function to print message to screen

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}



//function to create HTML message

function getStudentReport( student ) {
  var report = '<h2>Student: ' + student.name + '</h2>';
  report += '<p>Track: ' + student.track + '</p>';
  report += '<p>Points: ' + student.points + '</p>';
  report += '<p>Achievements: ' + student.achievements + '</p>';
  return report;
}



//loop which creates prompts and reacts differently based on input

while (true) {
  ask = prompt("Search student records: type a name [Jody] (or type 'quit' to end)"); // prompt message
  if (ask === null || ask.toLowerCase() === 'quit') {  //closes if 'quit' is typed or if 'close x' is clicked
    break  }
 for (var i = 0; i < students.length; i += 1) {
  student = students[i]; //accesses values (student) in array
  if ( student.name === ask ) { //if available student name is typed function is called and displays HTML
    message = getStudentReport( student );
    print(message);
  } 
//   else if ( student.indexOf( ask ) = -1) {
//    document.write("This student isn't included in our database");
//  }
 }
}
  
  
  
  
  





