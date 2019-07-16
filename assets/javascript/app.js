$(document).ready(function() {

    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        intervalId = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.text( "Time Remaining:" + seconds + "seconds");
    
            if (--timer < 0) {
              
               timer = seconds;
              $("#one").fadeOut();
               ShowAnswers();
    
              $('#results').html('Shot Clock Violation!');
    
    
            }
        }, 1000);
    
    
    }
    
    var StopTimer = function() {
                clearInterval(startTimer(intervalId));
        }
    
    
    
    
    
      
     var Questions = [
        {
       questions:'How many championships have they won?',
         answer:{
             a:'10',
             b:'12',
             c:'16',
             d:'18a'
    
         },
    
         correctanswer: 'c'
       },
    
        {
    
    
       questions:'How many Western Conference titles have they won?',
    
         answer:{
             a:'18',             
             b: '24',
             c: '25',
             d: '31'
             
    
         },
    
         correctanswer: 'd'
    
         },
    
         {
    
    
        questions:'How many division titles have they won?',
    
         answer:{
             a: '5',
             b: '18',
             c: '23',
             d: '30'
             
    
         },
    
         correctanswer: 'c'
    
         },
    
        {
    
    
        questions:'How many games have the Lakers won straight?',
             answer:{
             a: '11',
             b: '21',
             c: '26',
             d: '33'
             
    
         },
    
         correctanswer: 'd'
    
         },
    
        {
    
    
        questions:'Which year was the Lakers founded?',
            
        
             answer:{
             a: '1920',
             b: '1947',
             c: '1952',
             d: '1959'
             
    
         },
    
         correctanswer: 'b'
    
         },
    
      {
    
    
        questions:'What was the Lakers original team name?',
            
        
           answer:{
            a: 'Detroit Gems',
            b: 'Chicago Ducks',
            c: 'Miama Cranes',
            d: 'Michigan Badger'
            
             },
    
         correctanswer: 'a'
    
         },
    
    
         {
    
    
        questions:'Which state are the Lakers originally from?',
            
        answer:{
            a: 'Michigan',
            b: 'Montana',
            c: 'Minneapolis',
            d: 'Missouri'
            
             },
    
         correctanswer: 'c'
    
         },
    
        {
    
    
        questions:'Who set the NBA record for most points scored?',
            
        answer:{
            a: 'Elgin Baylor',
            b: 'Kobe Bryant',
            c: 'Jerry Wesy',
            d: 'Steph Curry'
            
             },
    
         correctanswer: 'a'
    
         },
    
        {
    
    
        questions:'Which Pacific team is the best in the west?',
            
            
        answer:{
            a: 'Lakers',
            b: 'Clippers',        
            c: 'Warriors',
            d: 'Kings'
            
             },
         correctanswer: 'a'
    
         }
    
    
    ];
    
    
      $("#start").on("click", function() {
      
    
            $("#start").fadeOut();
    
            setTimeout(ShowQuestions, 1000 * 1);
    
           
    
    
    
              });
    
    
    
    
    
    
    
    function ShowQuestions(){
    
      jQuery(function ($) {
        var fiftyseconds = 50 ,
            display = $('#timer');
        startTimer(fiftyseconds, display);
     });
    
    
    
    
     // A place to store output and answer choices
     var output=[];
     var answers;
    
    // for every question with answer choices we want to attach a radio button.
    
    
    for(var i= 0; i< Questions.length; i++){
         // reset answer choices
      answers=[];
    
    
    
    
    for(letter in Questions[i].answer){
    
      //add a radio button to the letters
    answers.push(
                    '<label>'
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ': '
              + Questions[i].answer[letter]
            + '</label>'
          );
    
      }
       // add questions and answers  to the output
    
       output.push(
              '<div class= "question">'+ Questions[i].questions + '</div>'
           + '<div class= "answers">' + answers.join('')+ '</div>'
    
          );
    
    
    
    
    
    }
    
    // to show our combined output in html
    
    quizContainer = $('#one')
    quizContainer.html(output.join(''));
    quizContainer.append('<button id ="get">' + "DONE" + '</button>');
    
     
     $("#get").on("click", function() {
          $("#one").fadeOut();
          $("#timer").fadeOut();
           ShowAnswers();
           
    
              });
          
    
    
    }
    
     
    
     
       function ShowAnswers(){
    
     
        //var Unanswered ="";
        counter =0;
        numCorrect=0;
        numWrong=0;
        numUnaswered=0;
        var updatenumCorrect = function(){$('#correctans').html('Correct Answers:'+ numCorrect);};
        var updatenumWrong =  function(){$('#wrongans').html('Wrong Answers:'+ numWrong);};
        var updateUnaswered = function(){$('#unanswered').html('Unanswered:'+ numUnaswered);};
       
    
    
    
        // pick the correct answers from the answer container
    
           // for each 
    
         for(var i = 0; i < Questions.length; i++ ) {
    
    
       
           
    
    
          var userAnswer = $('input:radio[name="question'+i+'"]:checked').val();
          //var checked = false;   
           if(!userAnswer ){
            numUnaswered++;
            updateUnaswered();
    
             } else{
                  if (userAnswer === Questions[i].correctanswer){
                      numCorrect++;
                      updatenumCorrect();
                      $('#results').html('All Done');
                     // checked = true;
                      //AnswerContainer[i].style.color = 'lightgreen';
                      console.log(userAnswer);
                  }else {    
                       numWrong++;
                       updatenumWrong();
                       $('#results').html('All Done');
                      //AnswerContainer[i].style.color = 'red';
    
                        }  
                
                     }  
    
           
           };
         }
    
          
           
        
    
    });