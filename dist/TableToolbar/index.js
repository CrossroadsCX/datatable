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
exports.TableToolbar = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var outline_1 = require("@heroicons/react/outline");
var TableToolbar = function (_a) {
    var _b = _a.canAdd, canAdd = _b === void 0 ? true : _b, _c = _a.canDelete, canDelete = _c === void 0 ? true : _c, _d = _a.canEdit, canEdit = _d === void 0 ? false : _d, _e = _a.canReset, canReset = _e === void 0 ? true : _e, handleAdd = _a.handleAdd, handleDelete = _a.handleDelete, handleEdit = _a.handleEdit, handleReset = _a.handleReset;
    return (jsx_runtime_1.jsxs("div", __assign({ className: "flex w-full m-4" }, { children: [handleAdd && (jsx_runtime_1.jsx("div", __assign({ title: "Add Row" }, { children: jsx_runtime_1.jsx(outline_1.PlusIcon, { className: "w-6 " + (canAdd ? 'text-gray-400 hover:text-gray-700 cursor-pointer' : 'text-gray-200') + " mx-2", onClick: handleAdd }, void 0) }), void 0)), handleEdit && (jsx_runtime_1.jsx("div", __assign({ title: "Edit Row" }, { children: jsx_runtime_1.jsx(outline_1.PencilIcon, { className: "w-6 " + (canEdit ? 'text-gray-400 hover:text-gray-700 cursor-pointer' : 'text-gray-200') + " mx-2", onClick: handleEdit }, void 0) }), void 0)), handleDelete && (jsx_runtime_1.jsx("div", __assign({ title: "Delete Row(s)" }, { children: jsx_runtime_1.jsx(outline_1.TrashIcon, { className: "w-6 " + (canDelete ? 'text-gray-400 hover:text-gray-700 cursor-pointer' : 'text-gray-200') + "  mx-2", onClick: handleDelete }, void 0) }), void 0)), handleReset && (jsx_runtime_1.jsx("div", __assign({ title: "Reset Table" }, { children: jsx_runtime_1.jsx(outline_1.ReplyIcon, { "aria-disabled": !canReset, className: "w-6 " + (canReset ? 'text-gray-400 hover:text-gray-700 cursor-pointer' : 'text-gray-200') + " mx-2", onClick: canReset ? handleReset : undefined }, void 0) }), void 0))] }), void 0));
};
exports.TableToolbar = TableToolbar;
//# sourceMappingURL=index.js.map