"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableRow = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var TableRow = function (props) {
    var row = props.row, editing = props.editing, saveRow = props.saveRow;
    var _a = react_1.useState(row), data = _a[0], setData = _a[1];
    var handleSaveRow = function () {
        saveRow(data);
    };
    var onChange = function (id, value) {
        var _a;
        var values = __assign(__assign({}, data.values), (_a = {}, _a[id] = value, _a));
        var newData = __assign(__assign({}, data), { values: values });
        setData(newData);
    };
    return (jsx_runtime_1.jsx("tr", __assign({}, row.getRowProps(), { children: row.cells.map(function (cell, index) { return (jsx_runtime_1.jsx("td", __assign({ className: "px-6 py-3 text-xs font-medium " + (index === 0 && 'w-8') }, cell.getCellProps(), { children: cell.render('Cell', {
                isEditable: (editing === row.index),
                editing: editing,
                onChange: onChange,
                handleSaveRow: handleSaveRow,
            }) }), void 0)); }) }), void 0));
};
exports.TableRow = TableRow;
//# sourceMappingURL=index.js.map