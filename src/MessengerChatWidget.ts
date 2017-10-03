import Messenger from './Messenger';

export default class MessengerChatWidget extends Messenger {
  constructor(element: HTMLElement, options) {
    super(element, options);

    element.classList.add('messenger-ui--chat-widget');

    this.header.addEventListener('click', this.onHeaderClick);
  }

  onHeaderClick(event: Event) {
    this.element.classList.toggle('messenger-ui--is-open');
  }
}
