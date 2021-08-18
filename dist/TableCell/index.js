"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditableCell = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var SelectCell_1 = require("./SelectCell");
var EditableCell = function (_a) {
    var initialValue = _a.value, 
    // row: { index },
    _b = _a.column, id = _b.id, options = _b.options, isEditable = _a.isEditable, onChange = _a.onChange;
    var _c = react_1.useState(initialValue), value = _c[0], setValue = _c[1];
    var _d = react_1.useState(true), initialRender = _d[0], setInitialRender = _d[1];
    var onLocalChange = function (event) {
        var newValue = event.target.value;
        setValue(newValue);
    };
    var onSelectChange = function (selectOption) {
        var newValue = selectOption.value;
        setValue(newValue);
    };
    react_1.useEffect(function () {
        if (id && !initialRender) {
            onChange(id, value);
        }
        setInitialRender(false);
    }, [value, id]);
    if (!isEditable)
        return (jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: initialValue }, void 0));
    if (options && options.length > 0) {
        var selectOptions = options.map(function (option) { return ({
            value: option,
            label: option,
        }); });
        return (jsx_runtime_1.jsx("div", { children: jsx_runtime_1.jsx(SelectCell_1.SelectCell, { options: selectOptions, handleChange: onSelectChange }, void 0) }, void 0));
    }
    return (jsx_runtime_1.jsx("div", { children: jsx_runtime_1.jsx("input", { className: "border-b border-blue-400", value: value, onChange: onLocalChange }, void 0) }, void 0));
};
exports.EditableCell = EditableCell;
//# sourceMappingURL=index.js.map