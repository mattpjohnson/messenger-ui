"use strict";
exports.__esModule = true;
var Message = function (_a) {
    var author = _a.author, content = _a.content, date = _a.date, isMe = _a.isMe;
    return "\n  <div class=\"messenger-ui__message " + (isMe ? 'messenger-ui__message--me' : '') + "\">\n    " + content + "\n  </div>\n";
};
exports["default"] = Message;
//# sourceMappingURL=Message.js.map