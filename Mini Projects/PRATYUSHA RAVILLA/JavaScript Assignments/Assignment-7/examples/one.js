function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    document.getElementById('timeDisplay').textContent = `${hours}:${minutes}:${seconds}`;
  }
  
  function setAlarm() {
    const alarmTimeInput = document.getElementById('alarmTime');
    const alarmTime = alarmTimeInput.value;
  
    if (alarmTime) {
      const now = new Date();
      const [alarmHour, alarmMinute] = alarmTime.split(':');
      now.setHours(alarmHour);
      now.setMinutes(alarmMinute);
      now.setSeconds(0);
  
      const currentTime = new Date();
      const timeToAlarm = now - currentTime;
  
      if (timeToAlarm <= 0) {
        alert('Please select a future time for the alarm.');
        return;
      }
  
      setTimeout(() => {
        playAlarm();
      }, timeToAlarm);
    }
  }
  
  function playAlarm() {
    const alarmSound = document.getElementById('alarmSound');
    alarmSound.play();
    alert('Alarm time! Wake up!');
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  