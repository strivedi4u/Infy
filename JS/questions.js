
var queNo = 0;
var score = 0;
var done =0;
var jsonQuestionObject;
var totalque;
var userAnswerMap = new Map();

function start(){
$.get("JSON/questions.json", function(data, status) {
jsonQuestionObject = data;
totalque = Object.keys(jsonQuestionObject).length;
$("#queId").html(jsonQuestionObject[queNo].que);
$("#opt1Id").html(jsonQuestionObject[queNo].options[0]);
$("#opt2Id").html(jsonQuestionObject[queNo].options[1]);
$("#opt3Id").html(jsonQuestionObject[queNo].options[2]);
$("#opt4Id").html(jsonQuestionObject[queNo].options[3]);
initlizeUserAnswerMap();
});
}


function initlizeUserAnswerMap() {
    for (var i = 0; i < totalque; i++) {
    userAnswerMap.set(i, undefined);
    }
    }
    function showAnswer() {
    (document.getElementById("crtAnsDiv")).style.display = 'block';
    $("#crtAns").html("Correct Answer : " + jsonQuestionObject[queNo].ans);
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    function previousQuestion(){
      queNo--;
      document.getElementById("btnNext").value = "Next";
      document.getElementById("crtAnsDiv").style.display = 'none';
      clearAllRadioBtns();
      start();
    } 
    
    
    
    
    
    function clearAllRadioBtns() {
    var optionsRadioGroup = document.getElementsByName("ansOption");
    for (var i = 0; i < optionsRadioGroup.length; i++) {
      if (optionsRadioGroup[i].checked == true) {
        optionsRadioGroup[i].checked = false;
      }
    }
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    function nextQuestion() {
    
    var optionsRadioGroup = document.getElementsByName("ansOption");
    for (var i = 0; i < optionsRadioGroup.length; i++) {
      if (optionsRadioGroup[i].checked == true) {
        userAnswerMap.set(queNo, i);
      }
    }
    
    queNo++;
    if (queNo == totalque - 1) {
      document.getElementById("btnNext").value = "Finish Quiz";
    } else {
      document.getElementById("btnPrev").disabled = false;
    }
    clearAllRadioBtns();
    
    if (queNo == totalque) {
      $("#result").load("./HTML/result.html", function() {
        
        insertRowsInTable();
      });
    }
    
    
    
    if (userAnswerMap.get(queNo) != undefined) {
      var optionsRadioGroup = document.getElementsByName("ansOption");
      optionsRadioGroup[userAnswerMap.get(queNo)].checked = true;
    }
    (document.getElementById("crtAnsDiv")).style.display = 'none';
    $("#queId").html(jsonQuestionObject[queNo].que);
    $("#opt1Id").html(jsonQuestionObject[queNo].options[0]);
    $("#opt2Id").html(jsonQuestionObject[queNo].options[1]);
    $("#opt3Id").html(jsonQuestionObject[queNo].options[2]);
    $("#opt4Id").html(jsonQuestionObject[queNo].options[3]);
    
    }
    
    
    
    














