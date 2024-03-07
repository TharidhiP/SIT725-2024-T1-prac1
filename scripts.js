// funcion to change heading when change text button is clicked
function changeText(){
    var textsArray = ["MONDAY","TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"]
    var number= getRandomNumberBetween(0,textsArray.length-1)
    console.log("Index: ", number)
    document.getElementById("heading").innerHTML = textsArray[number];
    }

// function to retrieve random between 0 to 4
function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
    }

    