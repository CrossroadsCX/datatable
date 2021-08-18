"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectCell = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_select_1 = __importDefault(require("react-select"));
var SelectCell = function (_a) {
    var handleChange = _a.handleChange, options = _a.options;
    var onChange = function (value) {
        handleChange(value);
    };
    return (jsx_runtime_1.jsx(react_select_1.default, { options: options, onChange: onChange, menuPortalTarget: document.body, menuPosition: "fixed" }, void 0));
};
exports.SelectCell = SelectCell;
//# sourceMappingURL=SelectCell.js.map