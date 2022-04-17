$("#header").load("./HTML/header.html");
$("#login").load("./HTML/login.html");

function validateUser(){
  alert("ok");
  document.getElementById("login").style.display = "none";
  $("#rules").load("./HTML/rules.html");
}

function startQuiz(){
    alert("yes");
    document.getElementById("rules").style.display = "none";
    $("#question").load("./HTML/questions.html");
    start();
}

function result(){
    alert("ok");
    document.getElementById("question").style.display = "none";
    $("#result").load("./HTML/result.html");
    
}


  
  

function insertRowsInTable() {
    alert("m");
    var table = document.getElementById("resultTable");
    for (var i = 0; i < totalque; i++) {
      var row = table.insertRow(i + 1);
      for (var j = 0; j < 3; j++) {
        var cell = row.insertCell(j);
        if (j == 0) {
          cell.innerHTML = i + 1;
        }
        if (j == 1) {
          cell.innerHTML = jsonQuestionObject[i].options[userAnswerMap.get(i)];
        }
        if (j == 2) {
          if (jsonQuestionObject[i].options[userAnswerMap.get(i)] == jsonQuestionObject[i].ans) {
            cell.innerHTML = "1 Mark";
            row.className = "alert alert-success";
            score++;
          } else {
            cell.innerHTML = "0 Mark";
            row.className = "alert alert-danger";
          }
        }
      }
    }
    showUserResult();
  }
  
  function showUserResult() {
    var uResult = (score / totalque) * 100;
    if (uResult >= 70) {
      $("#resultPnl").removeClass("panel-primary").addClass("panel-success");
      (document.getElementById("usrRemark")).innerHTML = "Excellent Job !! You are doing Great";
    } else if (uResult < 70 && uResult >= 50) {
      $("#resultPnl").removeClass("panel-primary").addClass("panel-warning");
      (document.getElementById("usrRemark")).innerHTML = "Good Job !! You can do Better";
    } else if (uResult < 50) {
      $("#resultPnl").removeClass("panel-primary").addClass("panel-danger");
      (document.getElementById("usrRemark")).innerHTML = "Upsss !! You need Serious Improvement";
    }
  
    (document.getElementById("ttlQuestion")).innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total number of Questions : " + totalque;
    (document.getElementById("uncorrAns")).innerHTML = "Total number of Wrong Answer : " + (totalque - score);
    (document.getElementById("corrAns")).innerHTML = "Total number of Correct Answer : " + score;
   
  
  
  }
  

