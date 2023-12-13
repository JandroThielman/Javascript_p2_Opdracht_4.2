function Bereken(parameter1) {
    let text = "";
    parameter1 = document.getElementById("num").value;

    for (let i = 1; i < 11; i++) {

        text += "<br>" + i + " x " +  parameter1 + " = " + (i * parameter1) + "<br>";
        
    }

    document.getElementById("tafel").innerHTML = text;
}