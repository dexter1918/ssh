var i = 0;

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
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
    // var elem = document.getElementById("myBar");
    // elem.style.display = "none";
  }
}

function validateForm() {
    let x = document.getElementById("snorlax").value == "" ||
            document.getElementById("heatran").value == "" ||
            document.getElementById("lucario").value == ""

    if (x == true) {
      alert("Be careful with it, man!");
      return false;
    }
  }

function abc() {

    var y = validateForm();

    if(y == false) return false;

    var resp = {};

    var snorlax = document.getElementById("snorlax").value;
    var heatran = document.getElementById("heatran").value;
    var lucario = document.getElementById("lucario").value;
    var gibleChkBox = document.getElementById("gible");
    
    if (gibleChkBox.checked == true)
      var gible = "Y";
    else
      var gible = "N";

    // console.log(gible);

    // console.log(formData.get("snorlax"));
    // console.log(formData.get("lucario"));

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
            // console.log(resp);
            move();
            document.getElementById("ert").innerHTML = JSON.stringify(resp);
            // var elem = document.getElementById("myBar");
            // elem.style.display = "none";
        })
        .catch(error => console.log('error', error));
}


