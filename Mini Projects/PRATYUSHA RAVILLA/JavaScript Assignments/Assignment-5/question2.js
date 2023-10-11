function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  async function myAsyncFunction() {
    let myPromise = new Promise(function(myResolve, myReject) {
      let x = 0;
  
      // some code (try to change x to 5)
  
      if (x == 0) {
        myResolve("OK");
      } else {
        myReject("Error");
      }
    });
  
    try {
      const value = await myPromise;
      myDisplayer(value);
    } catch (error) {
      myDisplayer(error);
    }
  }
  
  myAsyncFunction();