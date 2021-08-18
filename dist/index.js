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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTable = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
/* eslint react/jsx-props-no-spreading: 'warn', @typescript-eslint/no-use-before-define: 'warn' */
var react_1 = require("react");
var react_table_1 = require("react-table");
var filter_1 = __importDefault(require("lodash/filter"));
var TableToolbar_1 = require("./TableToolbar");
var TableRow_1 = require("./TableRow");
var TableCell_1 = require("./TableCell");
var utils_1 = require("./utils");
var DataTable = function (props) {
    var hooks = [
        react_table_1.useRowSelect,
    ];
    // Only set this value if we're able to delete rows
    var handleDelete;
    var initialData = props.data, columns = props.columns, defaultItem = props.defaultItem, handleChange = props.handleChange, _a = props.selectable, selectable = _a === void 0 ? true : _a;
    /** Table State */
    var initialState = react_1.useState({})[0] /* , setInitialState */;
    var _b = react_1.useState(null), editing = _b[0], setEditing = _b[1];
    var _c = react_1.useState(initialData), data = _c[0], setData = _c[1];
    var _d = react_1.useState(true), initialRender = _d[0], setInitialRender = _d[1];
    /*
     *  Selectable Options
     *    Add checkbox inputs in the header / rows with selectionHook
     *    Create the handleDelete handler. This isn't applicable without row selection
     *      It also tells the Toolbar to display the delete icon
     */
    if (selectable) {
        hooks.push(utils_1.selectionHook);
        handleDelete = function () {
            var indices = selectedFlatRows.map(function (item) { return item.index; });
            var updatedData = filter_1.default(data, function (item, index) { return !indices.includes(index); });
            setData(updatedData);
        };
    }
    var defaultColumn = react_1.useMemo(function () { return ({
        Cell: TableCell_1.EditableCell,
    }); }, []);
    var saveRow = function (row) {
        if (editing === null)
            return;
        var index = row.index, values = row.values;
        var newData = __spreadArray([], data);
        newData[index] = values;
        setData(newData);
        setEditing(null);
        toggleAllRowsSelected(false);
    };
    var _e = react_table_1.useTable.apply(void 0, __spreadArray([__assign(__assign({}, props), { data: data, defaultColumn: defaultColumn, columns: columns, initialState: initialState, saveRow: saveRow })], hooks)), rows = _e.rows, headerGroups = _e.headerGroups, getTableProps = _e.getTableProps, getTableBodyProps = _e.getTableBodyProps, prepareRow = _e.prepareRow, selectedFlatRows = _e.selectedFlatRows, toggleAllRowsSelected = _e.toggleAllRowsSelected;
    var handleAdd = function () {
        if (!defaultItem) {
            console.error('No default item set, cannot add rows.');
            return;
        }
        var updatedData = __spreadArray(__spreadArray([], data), [defaultItem]);
        setData(updatedData);
        setEditing(updatedData.length - 1);
    };
    var handleReset = function () {
        setData(initialData);
    };
    var handleEdit = function () {
        if (selectedFlatRows.length !== 1) {
            console.error('Cannot edit row count != 1.');
            return;
        }
        var selectedRow = selectedFlatRows[0];
        setEditing(selectedRow.index);
    };
    react_1.useEffect(function () {
        if (!editing && !initialRender && handleChange) {
            handleChange(data);
        }
        setInitialRender(false);
    }, [data, editing]);
    return (jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsx(TableToolbar_1.TableToolbar, { canAdd: editing === null, canDelete: selectedFlatRows.length > 0, canEdit: selectedFlatRows.length === 1, canReset: data.length !== initialData.length, handleAdd: handleAdd, handleDelete: handleDelete, handleEdit: handleEdit, handleReset: handleReset }, void 0), jsx_runtime_1.jsx("div", __assign({ className: "flex flex-col" }, { children: jsx_runtime_1.jsx("div", __assign({ className: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8" }, { children: jsx_runtime_1.jsx("div", __assign({ className: "py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8" }, { children: jsx_runtime_1.jsx("div", __assign({ className: "shadow overflow-hidden border-b border-gray-200 sm:rounded-lg" }, { children: jsx_runtime_1.jsxs("table", __assign({ className: "min-w-full divide-y divide-gray-200" }, getTableProps(), { children: [jsx_runtime_1.jsx("thead", __assign({ className: "bg-gray-50" }, { children: headerGroups.map(function (headerGroup, rowIndex) { return (jsx_runtime_1.jsx("tr", __assign({ className: "border-b border-gray-200" }, headerGroup.getHeaderGroupProps(), { children: headerGroup.headers.map(function (column) { return (jsx_runtime_1.jsx("th", __assign({}, column.getHeaderProps(), { scope: "col", className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider " + (rowIndex === 0 ? 'text-center border-l border-r border-gray-200' : '') }, { children: column.render('Header') }), void 0)); }) }), void 0)); }) }), void 0), jsx_runtime_1.jsx("tbody", __assign({}, getTableBodyProps(), { className: "bg-white divide-y divide-gray-200" }, { children: rows.map(function (row) {
                                            prepareRow(row);
                                            return (jsx_runtime_1.jsx(TableRow_1.TableRow, { row: row, editing: editing, saveRow: saveRow }, row.index));
                                        }) }), void 0)] }), void 0) }), void 0) }), void 0) }), void 0) }), void 0)] }, void 0));
};
exports.DataTable = DataTable;
//# sourceMappingURL=index.js.map