if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(getlatlong,error,{
      maximumAge:10,
      timeout:100,
      enableHighAccuracy:false,
    });
}
function getlatlong(data)
{
   console.log(data);
   //console.log(data.coords);
   console.log(data.coords.latitude);
   console.log(data.coords.longitude);
   
}