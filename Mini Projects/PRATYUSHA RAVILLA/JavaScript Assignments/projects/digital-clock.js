function displayTime(){
    let dateTime= new Date();
    let hours=dateTime.getHours();
    let minutes=dateTime.getMinutes();
    let seconds=dateTime.getSeconds();
    var session=document.getElementById('session');

    if(hours>=12){
        session.innerHTML='PM';
    } else{
        session.inerHTML='AM';
    }
    //    if(hours>12){
    //     hours=hours-12;
    //    }
    document.getElementById('hours').innerHTML=hours;
    document.getElementById('minutes').innerHTML=minutes;
    document.getElementById('seconds').innerHTML=seconds;
}

setInterval(displayTime, 10);