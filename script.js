var value = 0;
var tempUnit;
// to get tempearutre 
function get_temperature() {
     value = document.innerHTML = temperature.selectedIndex;
}

// to calculate temperature in celsius
function cal_celsius() {
     var temp = document.getElementById("tempValue").value;
     return temp;
}
// to calculate temperature in kelvin
function cal_kelvin() {
     var temp = document.getElementById("tempValue").value;
     temp = parseInt(temp) + 273.15;
     return temp;
}
// to calculate temperature in farenhit
function cal_farenhit() {
     var temp = document.getElementById("tempValue").value;
     temp = (parseFloat(temp) * (9 / 5)) + 32.0;
     return temp;
}

// to displap temperature of various unit accordingly 
function sub() {
     if (value == 0) {
          document.getElementById("error").innerHTML = "Please select a proper input";
          document.getElementById("error").style.display = "inline";
          document.getElementById("error").style.color = "#e40505";
          document.getElementById("temperature").style.borderColor = "#e40505";
     }
     if (value == 1) {
          tempUnit = cal_celsius();
          document.getElementById("output").innerHTML = tempUnit + " C";
          document.getElementById("error").style.display = "none";
          document.getElementById("temperature").style.borderColor = "black";
     }
     if (value == 2) {
          tempUnit = cal_kelvin();
          document.getElementById("output").innerHTML = tempUnit + " K";
          document.getElementById("error").style.display = "none";
          document.getElementById("temperature").style.borderColor = "black";
     }
     if (value == 3) {
          tempUnit = cal_farenhit();
          document.getElementById("output").innerHTML = tempUnit + " F";
          document.getElementById("error").style.display = "none";
          document.getElementById("temperature").style.borderColor = "black";
     }
}

// to reset value to 0
function reset_value() {
     value = 0;
}