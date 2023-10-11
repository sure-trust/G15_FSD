//function to count the button clicks  
function clickCounting() {  
  if(typeof(Storage) !== "undefined") {  
    if (localStorage.clickcount) {  
      localStorage.clickcount = Number(localStorage.clickcount)+1;  
    } else {  
      localStorage.clickcount = 1;  
    }  
    document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";  
  }  
    //when the browser does not support  
  else {  
    document.getElementById("result").innerHTML = "Your browser does not support web storage.";  
  }  
}  
  
//function to clear the data stored by browser  
function clearCounting() {  
    window.localStorage.clear();  
}  

