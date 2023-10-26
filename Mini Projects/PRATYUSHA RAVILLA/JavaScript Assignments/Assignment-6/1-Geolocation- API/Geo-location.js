let getlocation=()=>{
   //alert('getting location')
     
   //get the location from the user
   if(navigator.geolocation)
      {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    }
      else
      {
        alert('geolocation is not supprted by this browser');
      }
   }
   let showPosition=(position)=>{
            //console.log(position);
          let lat=position.coords.latitude;
          let long=position.coords.longitude;   

          let desti=document.querySelector('p');
          desti.innerHTML="Latitude:" +lat  + "  longitude:"+long;
           //or another method
           //desti.innerHTML=`Latitude:${lat}<br>Longitude:${long}`
           
           //console.log(lat);
          //console.log(long); 
       
      }

       let showError=(error)=>{
         //console.log(error);
         
         //using switch case we will show the error types
          
         switch(error.code){
            case error.PERMISSION_DENIED:
                alert('user denied the request for geolocation')
                break;
                
                case error.POSITION_UNAVAILABLE:
                    alert('Location information is unavailable')
                    break;

                    case error.TIMEOUT:
                        alert('The request to get user location timed out')
                        break;

                        case error.UNKNOWN_ERROR:
                            alert('An unknown error occured')
                            break;

                            default:
                                alert('error not deined')
                     }
    }
   


 