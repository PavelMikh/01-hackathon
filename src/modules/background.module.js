import {Module} from '../core/module'

export class BackgroundModule extends Module {
  static TYPE = 'BackgroundModule'
  static TEXT = 'Случайный фон'
  constructor() {
    super(BackgroundModule.type, BackgroundModule.text)
    this.backgroundColors = ['#0d43b8', '#007d17',
                             '#0b6880', '#5b00c4',
                             '#9d00c4', '#990000',
                             '#00ab6c', '#1a1a1a']
  }

  getRandomColor() {
    const index = Math.floor(Math.random() * this.backgroundColors.length)
    return this.backgroundColors[index]
  }

  trigger() {
    document.body.style.background = this.getRandomColor()
    return document.body.style.transition = '1s'
  }
}