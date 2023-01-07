var i = 0;

/////////////////////////////////////////////////////////////////////
function refreshPage() {
  window.location.reload();
}
setInterval(refreshPage, 60000); // refresh the page every 60 seconds
/////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
// var input1 = document.getElementById('snorlax');
// var input2 = document.getElementById('heatran');
// var input3 = document.getElementById('lucario');
// var isEnteringText = false;

// input1.addEventListener('focus', function() {
//   isEnteringText = true;
// });

// input1.addEventListener('blur', function() {
//   isEnteringText = false;
// });

// input2.addEventListener('focus', function() {
//   isEnteringText = true;
// });

// input2.addEventListener('blur', function() {
//   isEnteringText = false;
// });

// input3.addEventListener('focus', function() {
//   isEnteringText = true;
// });

// input3.addEventListener('blur', function() {
//   isEnteringText = false;
// });

// setInterval(function() {
//   if (!isEnteringText) {
//     location.reload();
//   }
// }, 90000);

/////////////////////////////////////////////////////////////////////

function validateForm() {
  let x = document.getElementById("snorlax").value == "" ||
    document.getElementById("heatran").value == "" ||
    document.getElementById("lucario").value == ""

  if (x == true) {
    alert("Be careful with it, man!");
    return false;
  }
}

document.addEventListener('keydown', function (event) {
  if (event.code === 'Enter') {
    document.getElementById('myBtn').click();
    document.getElementById('myBtn').style.backgroundColor = "grey";
  }
});

function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    elem.style.display = "block";
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

function abc() {

  var y = validateForm();

  if (y == false) return false;

  var resp = {};

  var snorlax = document.getElementById("snorlax").value;
  var heatran = document.getElementById("heatran").value;
  var lucario = document.getElementById("lucario").value;
  var gibleChkBox = document.getElementById("gible");

  if (gibleChkBox.checked == true)
    var gible = "Y";
  else
    var gible = "N";

  const encodedToken = window.btoa(snorlax + ":" + lucario);

  var myHeaders = new Headers();
  myHeaders.append("charmander", lucario);
  myHeaders.append("Authorization", "Basic " + encodedToken);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch(`https://password-vault-sapi.us-e2.cloudhub.io/pvs/${heatran}?gible=${gible}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      resp = result;
      move();
      document.getElementById("ert").innerHTML = JSON.stringify(resp);
    })
    .catch(error => console.log('error', error));
}


