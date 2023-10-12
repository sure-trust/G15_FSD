var x= document.getElementById("location");  
    function getlocation() {  
        if(navigator.geolocation){  
            navigator.geolocation.getCurrentPosition(showPosition,showError)  
          }  
        else  
        {  
             alert("Sorry! your browser is not supporting")  
         } }  
       
     function showPosition(position){  
       var x = "Your current location is (" + "Latitude: " + position.coords.latitude + ", " + "Longitude: " +    position.coords.longitude + ")";  
                document.getElementById("location").innerHTML = x;  
     }  
     function showError(error){
      console.log(data);
      alert('canot read location')
     }
  