function generateInputFields(){
    var opt = document.getElementById('numFields');
    var value =opt.options[opt.selectedIndex].value;
alert (value); // This will output the value selected

var nbP = +document.getElementById("numFields").value;
    var inputContainer = document.getElementById("inputContainer");

    for (var i = 0; i < nbP; i++) {
        var newForm = document.createElement("numFields");
        newForm.setAttribute("type", "text");
        newForm.setAttribute("id", "form"+i);
        inputContainer.appendChild(newForm);
        inputContainer.appendChild(document.createElement("br"));
    }

}
