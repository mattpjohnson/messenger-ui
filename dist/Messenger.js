"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var Header_1 = require("./components/Header");
var InputArea_1 = require("./components/InputArea");
var Message_1 = require("./components/Message");
var Messenger = /** @class */ (function () {
    function Messenger(element, options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        this.components = { Header: Header_1["default"], InputArea: InputArea_1["default"], Message: Message_1["default"] };
        this.element = element;
        this.header = this.createHeader();
        this.messageListArea = this.createMessageListArea();
        this.inputArea = this.createInputArea();
        this.components = __assign({}, this.components, options.components);
        this.header.innerHTML = this.components.Header();
        this.inputArea.innerHTML = this.components.InputArea(options);
        this.element.classList.add('messenger-ui');
        this.messageListArea.classList.add('messenger-ui__message-list');
        // Add submit event listener
        var form = this.inputArea.querySelector('form');
        form.addEventListener('submit', function (event) { return _this.onSubmit(event); });
    }
    Messenger.prototype.createHeader = function () {
        var header = document.createElement('div');
        this.element.appendChild(header);
        return header;
    };
    Messenger.prototype.createMessageListArea = function () {
        var messageListArea = document.createElement('div');
        this.element.appendChild(messageListArea);
        return messageListArea;
    };
    Messenger.prototype.createInputArea = function () {
        var inputArea = document.createElement('div');
        this.element.appendChild(inputArea);
        return inputArea;
    };
    Messenger.prototype.onSubmit = function (event) {
        event.preventDefault();
        var input = this.inputArea.querySelector('input');
        var text = input.value;
        input.value = '';
        if (text === '')
            return;
        this.addMessage({ author: '', content: text, date: Date(), isMe: true });
    };
    Messenger.prototype.addMessage = function (data) {
        var message = document.createElement('div');
        message.innerHTML = this.components.Message(data);
        this.messageListArea.appendChild(message);
    };
    return Messenger;
}());
exports["default"] = Messenger;
//# sourceMappingURL=Messenger.js.map