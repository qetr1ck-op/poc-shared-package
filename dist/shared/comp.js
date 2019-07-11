'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var tslib_1 = require('tslib');
var react_1 = tslib_1.__importDefault(require('react'));
var semantic_ui_react_1 = require('semantic-ui-react');
require('./comp.style.less');
exports.FooComp = function(_a) {
  var fooProp = _a.fooProp;
  return react_1.default.createElement('div', { className: 'bg' }, fooProp.toLocaleUpperCase());
};
exports.ButtonExampleLoading = function() {
  return react_1.default.createElement(
    'div',
    null,
    react_1.default.createElement(semantic_ui_react_1.Button, { loading: true }, 'Loading'),
    react_1.default.createElement(
      semantic_ui_react_1.Button,
      { basic: true, loading: true },
      'Loading',
    ),
    react_1.default.createElement(
      semantic_ui_react_1.Button,
      { loading: true, primary: true },
      'Loading',
    ),
    react_1.default.createElement(
      semantic_ui_react_1.Button,
      { loading: true, secondary: true },
      'Loading',
    ),
  );
};
//# sourceMappingURL=comp.js.map
