import './timer.module.style.css';
import {Module} from '../core/module';

export class TimerModule extends Module {

  // static TYPE = 'TimerModule';
  // static TEXT = 'Установить таймер';

  // constructor() {
  //   super(TimerModule.type, TimerModule.text);
  // }

  static Text = {
    Start: 'Введите время в секундах:',
    End: 'Время вышло!',
    Error: 'Введите корректное значение времени в секундах!'
  }

  constructor(type, text) {
    super(type, text);

    this.type = 'TimerModule';
    this.text = 'Установить таймер';
  }

  trigger() {
    this.time = prompt(TimerModule.Text.Start);

    if (this.time !== null && !isNaN(this.time)) {
      this.time = Number(this.time.trim());

      if (this.time <= 0) {
        alert(TimerModule.Text.Error);
        this.trigger();
      } else if (this.time < 3600) {
        this.render();
      } else {
        this.time = 3599;
        this.render();
      }
    } else if (isNaN(this.time)) {
      alert(TimerModule.Text.Error);
      this.trigger();
    }
  }

  render() {
    const timer = document.createElement('div');
    timer.className = 'timer';
    timer.innerHTML = `
      <span class="timer-part timer-minutes">00</span>
			<span class="timer-part">:</span>
			<span class="timer-part timer-seconds">00</span>
			<button type="button" class="timer-btn"></button>`;

    document.body.appendChild(timer);

    this.start();
    this.update();
    this.cancel();
  }

  start() {
    this.interval = setInterval(() => {
      this.time--;
      this.update();

      if (this.time === 0) {
        this.stop();
      }
    }, 1000);
  }

  update() {
    this.minutes = document.body.querySelector('.timer-minutes');
    this.seconds = document.body.querySelector('.timer-seconds');

    const minutes = Math.floor(this.time / 60);
    const seconds = this.time % 60;

    this.minutes.textContent = minutes.toString().padStart(2, '0');
    this.seconds.textContent = seconds.toString().padStart(2, '0');
  }

  stop() {
    alert(TimerModule.Text.End);
    this.clear();
  }

  cancel() {
    this.cancelBtn = document.body.querySelector('.timer-btn');
    this.cancelBtn.addEventListener('click', (event) => {
      event.preventDefault();
      this.clear();
    });
  }

  clear() {
    clearInterval(this.interval);
    this.interval = null;
    document.body.querySelector('.timer').remove();
  }
}

const timer = new TimerModule('timer', 'timer');
timer.trigger()
