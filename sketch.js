var canva;
var gameState, contestantCount, database, quiz, question, contestant;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(400,400);

  quiz = new quiz();
  quiz.getState();
  quiz.start();


}



function draw(){
  background("pink");

  quiz.display();
  
  
}
