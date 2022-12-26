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

    // console.log(formData.get("snorlax"));
    // console.log(formData.get("lucario"));

    const gible = "";

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
            document.getElementById("ert").innerHTML = JSON.stringify(resp);
        })
        .catch(error => console.log('error', error));
}


