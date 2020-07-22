function openQuestions(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function fillRightDiv(htmlPath) {
  document.getElementById("rightside").innerHTML = '<ul> <li><a href="./drawingAnswers/draw-on-canvas-answer.html" onclick="">How do I draw on the canvas?</a></li><li>How do I change my brush type?</li></ul>';
}


function fillDiv(question) {
    console.log("hi");
    for (const key in answerJSON) {
        if (key === question) {
            $("#rightside").empty();
            $('#rightside').append(answerJSON[key]);
        }
    }
}