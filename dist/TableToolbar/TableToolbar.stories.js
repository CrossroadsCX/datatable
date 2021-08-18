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
exports.WithoutActions = exports.Disabled = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var _1 = require(".");
var handleAdd = function () {
    console.log('Handling Add');
};
var handleDelete = function () {
    console.log('Handling Deleted');
};
var handleEdit = function () {
    console.log('Handling Edit');
};
var handleReset = function () {
    console.log('Resetting Table');
};
exports.default = {
    title: 'components/DataTable/TableToolbar',
    component: _1.TableToolbar,
};
var Template = function (args) { return jsx_runtime_1.jsx(_1.TableToolbar, __assign({}, args), void 0); };
exports.Basic = Template.bind({});
exports.Basic.args = {
    handleAdd: handleAdd,
    handleDelete: handleDelete,
    handleEdit: handleEdit,
    handleReset: handleReset,
    canEdit: true,
};
exports.Disabled = Template.bind({});
exports.Disabled.args = {
    handleAdd: handleAdd,
    handleDelete: handleDelete,
    handleEdit: handleEdit,
    handleReset: handleReset,
    canDelete: false,
    canReset: false,
};
exports.WithoutActions = Template.bind({});
exports.WithoutActions.args = { handleAdd: handleAdd };
//# sourceMappingURL=TableToolbar.stories.js.map