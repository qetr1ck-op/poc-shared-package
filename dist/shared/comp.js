"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var semantic_ui_react_1 = require("semantic-ui-react");
require("./breadcrumbs.style.less");
var TSCBreadcrumbs = /** @class */ (function (_super) {
    __extends(TSCBreadcrumbs, _super);
    function TSCBreadcrumbs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TSCBreadcrumbs.prototype.render = function () {
        return react_1.default.createElement(semantic_ui_react_1.Breadcrumb, { size: "small" }, this.props.children);
    };
    TSCBreadcrumbs.Section = function (_a) {
        var to = _a.to, active = _a.active, children = _a.children;
        if (active) {
            return react_1.default.createElement(semantic_ui_react_1.Breadcrumb.Section, { active: true }, children);
        }
        return (react_1.default.createElement(semantic_ui_react_1.Breadcrumb.Section, { link: true, as: react_router_dom_1.Link, to: to }, children));
    };
    TSCBreadcrumbs.Divider = function () { return react_1.default.createElement(semantic_ui_react_1.Breadcrumb.Divider, { icon: "right chevron" }); };
    return TSCBreadcrumbs;
}(react_1.default.PureComponent));
exports.TSCBreadcrumbs = TSCBreadcrumbs;
