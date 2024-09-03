function myDateAndTime() {

    var timeperiod;

    var time = new Date().getHours();

    if (time < 10) {
        timeperiod = "Good Morning";
        }

    else if (time < 20){
        timeperiod = "Good Day";
        }


    else{
        timeperiod = "Good Evening";
    }

    document.getElementById("Greet").innerHTML = timeperiod;
    document.getElementById("Hour").innerHTML = "Current Hour is :" + time;
}

myDateAndTime();



var table = 1;

var num = 76;

document.write("Multiplication Table of " + num + "<br>")

while (table <= 10){

    document.write(num + " x " + table  + "=" + num*1 + "<br>" ); i++;
}




