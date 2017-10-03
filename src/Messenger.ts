import Header from './components/Header';
import InputArea from './components/InputArea';
import Message from './components/Message';

export default class Messenger {
  protected element: Element;
  protected header: Element;
  protected messageListArea: Element;
  protected inputArea: Element;
  private components = { Header, InputArea, Message };

  constructor(element: Element, options: any = {}) {
    this.element = element;
    this.header = this.createHeader();
    this.messageListArea = this.createMessageListArea();
    this.inputArea = this.createInputArea();

    this.components = {...this.components, ...options.components};
    this.header.innerHTML = this.components.Header();
    this.inputArea.innerHTML = this.components.InputArea(options);

    this.element.classList.add('messenger-ui');
    this.messageListArea.classList.add('messenger-ui__message-list');

    // Add submit event listener
    const form = this.inputArea.querySelector('form');
    form.addEventListener('submit', event => this.onSubmit(event));
  }

  private createHeader() {
    const header = document.createElement('div');
    this.element.appendChild(header);
    return header;
  }

  private createMessageListArea() {
    const messageListArea = document.createElement('div');
    this.element.appendChild(messageListArea);
    return messageListArea;
  }

  private createInputArea() {
    const inputArea = document.createElement('div');
    this.element.appendChild(inputArea);
    return inputArea;
  }

  private onSubmit(event: Event) {
    event.preventDefault();

    const input = this.inputArea.querySelector('input');
    const text = input.value;
    input.value = '';

    if (text === '') return;

    this.addMessage({ author: '', content: text, date: Date(), isMe: true });
  }

  addMessage(data) {
    const message = document.createElement('div');
    message.innerHTML = this.components.Message(data);
    this.messageListArea.appendChild(message);
  }
}
