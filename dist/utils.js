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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectionHook = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var outline_1 = require("@heroicons/react/outline");
var selectionHook = function (hooks) {
    hooks.allColumns.push(function (columns) { return __spreadArray([
        {
            id: '_selector',
            disableResizing: true,
            disableGroupBy: true,
            minWidth: 45,
            width: 45,
            maxWidth: 45,
            Aggregated: undefined,
            Header: function (_a) {
                var getToggleAllRowsSelectedProps = _a.getToggleAllRowsSelectedProps;
                return (jsx_runtime_1.jsx("input", __assign({ type: "checkbox", className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-400 rounded" }, getToggleAllRowsSelectedProps()), void 0));
            },
            Cell: function (_a) {
                var row = _a.row, editing = _a.editing, handleSaveRow = _a.handleSaveRow;
                if (editing === row.index) {
                    return (jsx_runtime_1.jsx(outline_1.CheckIcon, { className: "w-4 border border-green-600 bg-green-200 rounded-md cursor-pointer hover:bg-green-600", onClick: handleSaveRow }, void 0));
                }
                return (jsx_runtime_1.jsx("input", __assign({ type: "checkbox", className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" }, row.getToggleRowSelectedProps()), void 0));
            },
        }
    ], columns); });
};
exports.selectionHook = selectionHook;
//# sourceMappingURL=utils.js.map