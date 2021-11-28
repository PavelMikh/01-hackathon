import {Module} from '../core/module'

export class PrintModule extends Module {
  static TYPE = 'PrintModule'
  static TEXT = 'Печать страницы'
  constructor() {
    super(PrintModule.TYPE, PrintModule.TEXT)
    this.ourMessage = document.createElement('div')
    this.ourMessage.textContent = '{ Данная функция нужна для людей пожилого возраста }'
    this.ourMessage.style.fontSize = 'x-large'
    this.ourMessage.style.width = '100%'
    this.ourMessage.style.textAlign = 'center'
    this.ourMessage.style.marginTop = '3rem'
  }

  createInfoMessage() {
    if (!document.body.ourMessage) {
      document.body.append(this.ourMessage)
    }
  }

  trigger() {
    this.createInfoMessage()
    window.print()
  }
}