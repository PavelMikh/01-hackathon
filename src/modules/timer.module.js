import {Module} from '../core/module';

export class TimerModule extends Module {

  // static TYPE = 'TimerModule';
  // static TEXT = '';

  // constructor() {
  //   super(TimerModule.type, TimerModule.text);
  // }

  constructor(type, text) {
    super(type, text);

    this.type = 'TimerModule';
    this.text = 'Установить таймер';

    this.inputTime = 120;
  }

  trigger() {
    const timer = document.createElement('div');
    timer.className = 'timer';
    timer.innerHTML = `<span class="timer-part timer-minutes">00</span>
			<span class="timer-part">:</span>
			<span class="timer-part timer-seconds">00</span>`;

    document.body.appendChild(timer);

    this.updateTime();
    this.start();
  }

  start() {
    this.interval = setInterval(() => {
      this.inputTime--;
      this.updateTime();

      if (this.inputTime === 0) {
        this.stop();
      }
    }, 1000);
  }

  updateTime() {
    this.minutes = document.body.querySelector('.timer-minutes');
    this.seconds = document.body.querySelector('.timer-seconds');

    const minutes = Math.floor(this.inputTime / 60);
    const seconds = this.inputTime % 60;

    this.minutes.textContent = minutes.toString().padStart(2, '0');
    this.seconds.textContent = seconds.toString().padStart(2, '0');
  }

  stop() {
    clearInterval(this.interval);
    document.body.querySelector('.timer').remove();
    this.interval = null;
  }
}

const timer = new TimerModule('timer', 'timer');
timer.trigger()
