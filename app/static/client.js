var el = x => document.getElementById(x);


function generate() {
  alert("it works ok")
  el("analyze-button").innerHTML = "Generating...";
  var xhr = new XMLHttpRequest();
  var loc = window.location;
  xhr.open("POST", `${loc.protocol}//${loc.hostname}:${loc.port}/generate`,
    true);
  xhr.onerror = function() {
    alert(xhr.responseText);
  };
  xhr.onload = function(e) {
    if (this.readyState === 4) {
        var response = el("enteredText").value
      el("result-label").innerHTML = `Result = ${response}`;
    }
    el("analyze-button").innerHTML = "Generate";
  };
}
