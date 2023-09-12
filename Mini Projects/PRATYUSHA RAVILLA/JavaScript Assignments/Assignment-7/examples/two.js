// Function to display the current time
function displayTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;
  }
  
  // Function to check and play the alarm sound
  function checkAlarm() {
    const alarmTimeInput = document.getElementById('alarmTime');
    const alarmTime = alarmTimeInput.value;
  
    if (!alarmTime) {
      alert('Please set the alarm time.');
      return;
    }
  
    const now = new Date();
    const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    
    if (alarmTime === currentTime) {
      const alarmSound = document.getElementById('alarmSound');
      alarmSound.play();
      alert('Alarm is ringing!');
    }
  }
  
  // Function to set the alarm
  function setAlarm() {
    const alarmTimeInput = document.getElementById('alarmTime');
    const alarmTime = alarmTimeInput.value;
  
    if (!alarmTime) {
      alert('Please set the alarm time.');
      return;
    }
  
    setInterval(checkAlarm, 1000); // Check every second for the alarm time
  }
  
  // Initial time display
  displayTime();
  setInterval(displayTime, 1000); // Update the time every second
  