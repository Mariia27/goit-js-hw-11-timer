
"use strict";
const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]'),
    timerUpdate: document.querySelector('#timer-1')
}
class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
    }

 

    start = setInterval(() => {
            const currentDate = Date.now();
            const timeLeft = this.targetDate - currentDate;
            const time = this.getTimeComponents(timeLeft);
        this.updateClock(time)
        this.stop(time)
        }, 1000);
     
    stop(timeLeft) {
        if (timeLeft < 0) {
            clearInterval(this.start);
            refs.timerUpdate.textContent = `Tada!`;
        }
    
    }
    getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return {days, hours, mins, secs}
    }
     pad(value) {
    return String(value).padStart(2, "0");
  }
    updateClock({days, hours, mins, secs}) {
    
        refs.days.textContent = `${days}`
        refs.hours.textContent = `${hours}`
        refs.mins.textContent = `${mins}`
        refs.secs.textContent = `${secs}`
}


}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});