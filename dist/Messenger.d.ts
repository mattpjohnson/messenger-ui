export default class Messenger {
    protected element: Element;
    protected header: Element;
    protected messageListArea: Element;
    protected inputArea: Element;
    private components;
    constructor(element: Element, options?: any);
    private createHeader();
    private createMessageListArea();
    private createInputArea();
    private onSubmit(event);
    addMessage(data: any): void;
}
