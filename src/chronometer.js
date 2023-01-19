class Chronometer {

  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  // Iteration 2
  
  start(printTimeCallback) {

    this.intervalId = setInterval(()=> {
      if (typeof printTimeCallback === "function") {
        printTimeCallback();
      }
       this.currentTime++
      }, 1000)
      
    }

    // Iteration 3

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }


  // Iteration 4

  getSeconds() {
    return this.currentTime % 60;
  }


  // Iteration 5

  computeTwoDigitNumber(value) {
    if (String(value).length === 1) {
      return `0${value}`
    } else {
      return String(value);
    }
  }


  // Iteration 6

  stop() {
    clearInterval(this.intervalId)
  }


  // Iteration 7

  reset() {
    this.currentTime = 0;
  }


  // Iteration 8

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());

    return `${minutes}:${seconds}`
  }

}
