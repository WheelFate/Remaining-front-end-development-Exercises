function populate(){
    if(quiz.isEnded()){
        // showScores();
    }else{
        // show question 
        var element=document.getElementById("question");
        element.innerHTML=quiz.getQuestionIndex().text;
    }
}

var questions = [
    new Question("Which one is not an object oriented programming language?", ["Java", "C#","C++", "C"], "C"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("There are ____ main components of object oriented programming.", ["1", "6","2", "4"], "4"),
    new Question("Which language is used for web apps?", ["PHP", "Python", "Javascript", "All"], "All"),
    new Question("MVC is a ____.", ["Language", "Library", "Framework", "All"], "Framework")
];

var quiz=new Quiz(questions);

populate();