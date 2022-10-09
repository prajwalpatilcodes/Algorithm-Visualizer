var key_insertion;
function insertionSort() {
  var elements = document.getElementById("array").children;

  var n = elements.length;
  var element1 = elements[j].style;
  var element2 = elements[j + 1].style;
  var val1 = parseInt(element1.height);

  if (val1 > key_insertion) {
    element2.backgroundColor = "orange";
    element2.height = val1 + "px";
    j--;
  }
  if (j == -1 || val1 <= key_insertion) {
    j++;
    elements[j].style.height = key_insertion + "px";
    i++;
    if (i == n) {
      end = window.performance.now();
      document.getElementById('bubble').disabled = false;
      document.getElementById('bubble').style.backgroundColor = "#240046";
      document.getElementById('merge').disabled = false;
      document.getElementById('merge').style.backgroundColor = "#240046";
      document.getElementById('insertion').disabled = false;
      document.getElementById('insertion').style.backgroundColor = "#240046";
      document.getElementById('selection').disabled = false;
      document.getElementById('selection').style.backgroundColor = "#240046";
      console.log(`Execution time: ${end - start} ms`);
      clearInterval(globinterval);
    } else {
      key_insertion = parseInt(elements[i].style.height);
      elements[i].style.backgroundColor = "purple";
      j = i - 1;
      element2.backgroundColor = "blueviolet";
    }
  }
}

function insertion_sortonclick() {
  document.getElementById('bubble').disabled = true;
  document.getElementById('bubble').style.backgroundColor = "#c77dff";
  document.getElementById('merge').disabled = true;
  document.getElementById('merge').style.backgroundColor = "#c77dff";
  document.getElementById('insertion').disabled = true;
  document.getElementById('insertion').style.backgroundColor = "#c77dff";
  document.getElementById('selection').disabled = true;
  document.getElementById('selection').style.backgroundColor = "#c77dff";
  start = window.performance.now();
  (i = 1), (j = 0);
  var elements = document.getElementById("array").children;
  key_insertion = parseInt(elements[i].style.height);
  elements[i].style.backgroundColor = "purple";
  var startinterval = setInterval(insertionSort, 1000);
  globinterval = startinterval;
}
