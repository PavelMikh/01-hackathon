import { Module } from '../core/module';
import { random } from '../utils';

export class MessageModule extends Module {

    static #messagesArray = ['Have a nice weekend!', 'Happy Thanksgiving Day!', 'All the leaves are brown)', 'Id be safe and warm'];
    static TYPE = 'MessageModule';
    static TEXT = 'Показать сообщение';

    constructor() {
        super(MessageModule.TYPE, MessageModule.TEXT);
    }

    trigger() {
        try {
            const messageBlock = this.createMessageElement();
            document.body.append(messageBlock);
            const messageTimeout = setTimeout(() => {
                if (messageBlock) {
                    messageBlock.remove();
                }
                clearTimeout(messageTimeout);
            }, 1000);
        } catch (e) {
            console.log(e.name + ': ' + e.message);
        }
    };
    createMessageElement() {
        const randomIndex = random(0, MessageModule.#messagesArray.length - 1);
        const messageBlock = document.createElement('div');
        messageBlock.className = 'message';
        messageBlock.textContent = MessageModule.#messagesArray[randomIndex];
        const winWidth = window.innerWidth;
        const winHeight = window.innerHeight;

        const randomTop = random(0, winHeight - 100);
        const randomLeft = random(0, winWidth - 100);

        messageBlock.style.top = randomTop + 'px';
        messageBlock.style.left = randomLeft + 'px';

        return messageBlock;
    }
}
