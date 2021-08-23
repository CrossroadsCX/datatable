'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactTable = require('react-table');
var filter = require('lodash/filter');
var outline = require('@heroicons/react/outline');
var Select = require('react-select');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var filter__default = /*#__PURE__*/_interopDefault(filter);
var Select__default = /*#__PURE__*/_interopDefault(Select);

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

var TableToolbar = function TableToolbar(_ref) {
  var _ref$canAdd = _ref.canAdd,
      canAdd = _ref$canAdd === void 0 ? true : _ref$canAdd,
      _ref$canDelete = _ref.canDelete,
      canDelete = _ref$canDelete === void 0 ? true : _ref$canDelete,
      _ref$canEdit = _ref.canEdit,
      canEdit = _ref$canEdit === void 0 ? false : _ref$canEdit,
      _ref$canReset = _ref.canReset,
      canReset = _ref$canReset === void 0 ? true : _ref$canReset,
      handleAdd = _ref.handleAdd,
      handleDelete = _ref.handleDelete,
      handleEdit = _ref.handleEdit,
      handleReset = _ref.handleReset;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flex w-full m-4"
  }, handleAdd && /*#__PURE__*/React__default['default'].createElement("div", {
    title: "Add Row"
  }, /*#__PURE__*/React__default['default'].createElement(outline.PlusIcon, {
    className: "w-6 ".concat(canAdd ? 'text-gray-400 hover:text-gray-700 cursor-pointer' : 'text-gray-200', " mx-2"),
    onClick: handleAdd
  })), handleEdit && /*#__PURE__*/React__default['default'].createElement("div", {
    title: "Edit Row"
  }, /*#__PURE__*/React__default['default'].createElement(outline.PencilIcon, {
    className: "w-6 ".concat(canEdit ? 'text-gray-400 hover:text-gray-700 cursor-pointer' : 'text-gray-200', " mx-2"),
    onClick: handleEdit
  })), handleDelete && /*#__PURE__*/React__default['default'].createElement("div", {
    title: "Delete Row(s)"
  }, /*#__PURE__*/React__default['default'].createElement(outline.TrashIcon, {
    className: "w-6 ".concat(canDelete ? 'text-gray-400 hover:text-gray-700 cursor-pointer' : 'text-gray-200', "  mx-2"),
    onClick: handleDelete
  })), handleReset && /*#__PURE__*/React__default['default'].createElement("div", {
    title: "Reset Table"
  }, /*#__PURE__*/React__default['default'].createElement(outline.ReplyIcon, {
    "aria-disabled": !canReset,
    className: "w-6 ".concat(canReset ? 'text-gray-400 hover:text-gray-700 cursor-pointer' : 'text-gray-200', " mx-2"),
    onClick: canReset ? handleReset : undefined
  })));
};

var TableRow = function TableRow(props) {
  var row = props.row,
      editing = props.editing,
      saveRow = props.saveRow;

  var _useState = React.useState(row),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var handleSaveRow = function handleSaveRow() {
    saveRow(data);
  };

  var onChange = function onChange(id, value) {
    var values = _objectSpread2(_objectSpread2({}, data.values), {}, _defineProperty({}, id, value));

    var newData = _objectSpread2(_objectSpread2({}, data), {}, {
      values: values
    });

    setData(newData);
  };

  return /*#__PURE__*/React__default['default'].createElement("tr", row.getRowProps(), row.cells.map(function (cell, index) {
    return /*#__PURE__*/React__default['default'].createElement("td", _extends({
      className: "px-6 py-3 text-xs font-medium ".concat(index === 0 && 'w-8')
    }, cell.getCellProps()), cell.render('Cell', {
      isEditable: editing === row.index,
      editing: editing,
      onChange: onChange,
      handleSaveRow: handleSaveRow
    }));
  }));
};

var SelectCell = function SelectCell(_ref) {
  var handleChange = _ref.handleChange,
      options = _ref.options;

  var onChange = function onChange(value) {
    handleChange(value);
  };

  return /*#__PURE__*/React__default['default'].createElement(Select__default['default'], {
    options: options,
    onChange: onChange,
    menuPortalTarget: document.body,
    menuPosition: "fixed"
  });
};

var EditableCell = function EditableCell(_ref) {
  var initialValue = _ref.value,
      _ref$column = _ref.column,
      id = _ref$column.id,
      options = _ref$column.options,
      isEditable = _ref.isEditable,
      onChange = _ref.onChange;

  var _useState = React.useState(initialValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = React.useState(true),
      _useState4 = _slicedToArray(_useState3, 2),
      initialRender = _useState4[0],
      setInitialRender = _useState4[1];

  var onLocalChange = function onLocalChange(event) {
    var newValue = event.target.value;
    setValue(newValue);
  };

  var onSelectChange = function onSelectChange(selectOption) {
    var newValue = selectOption.value;
    setValue(newValue);
  };

  React.useEffect(function () {
    if (id && !initialRender) {
      onChange(id, value);
    }

    setInitialRender(false);
  }, [value, id]);
  if (!isEditable) return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, initialValue);

  if (options && options.length > 0) {
    var selectOptions = options.map(function (option) {
      return {
        value: option,
        label: option
      };
    });
    return /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement(SelectCell, {
      options: selectOptions,
      handleChange: onSelectChange
    }));
  }

  return /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("input", {
    className: "border-b border-blue-400",
    value: value,
    onChange: onLocalChange
  }));
};

var selectionHook = function selectionHook(hooks) {
  hooks.allColumns.push(function (columns) {
    return [{
      id: '_selector',
      disableResizing: true,
      disableGroupBy: true,
      minWidth: 45,
      width: 45,
      maxWidth: 45,
      Aggregated: undefined,
      Header: function Header(_ref) {
        var getToggleAllRowsSelectedProps = _ref.getToggleAllRowsSelectedProps;
        return /*#__PURE__*/React__default['default'].createElement("input", _extends({
          type: "checkbox",
          className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-400 rounded"
        }, getToggleAllRowsSelectedProps()));
      },
      Cell: function Cell(_ref2) {
        var row = _ref2.row,
            editing = _ref2.editing,
            handleSaveRow = _ref2.handleSaveRow;

        if (editing === row.index) {
          return /*#__PURE__*/React__default['default'].createElement(outline.CheckIcon, {
            className: "w-4 border border-green-600 bg-green-200 rounded-md cursor-pointer hover:bg-green-600",
            onClick: handleSaveRow
          });
        }

        return /*#__PURE__*/React__default['default'].createElement("input", _extends({
          type: "checkbox",
          className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        }, row.getToggleRowSelectedProps()));
      }
    }].concat(_toConsumableArray(columns));
  });
};

var DataTable = function DataTable(props) {
  var hooks = [reactTable.useRowSelect]; // Only set this value if we're able to delete rows

  var handleDelete;
  var initialData = props.data,
      columns = props.columns,
      defaultItem = props.defaultItem,
      handleChange = props.handleChange,
      _props$selectable = props.selectable,
      selectable = _props$selectable === void 0 ? true : _props$selectable;
  /** Table State */

  var _useState = React.useState({}),
      _useState2 = _slicedToArray(_useState, 1),
      initialState
  /* , setInitialState */
  = _useState2[0];

  var _useState3 = React.useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      editing = _useState4[0],
      setEditing = _useState4[1];

  var _useState5 = React.useState(initialData),
      _useState6 = _slicedToArray(_useState5, 2),
      data = _useState6[0],
      setData = _useState6[1];

  var _useState7 = React.useState(true),
      _useState8 = _slicedToArray(_useState7, 2),
      initialRender = _useState8[0],
      setInitialRender = _useState8[1];
  /*
   *  Selectable Options
   *    Add checkbox inputs in the header / rows with selectionHook
   *    Create the handleDelete handler. This isn't applicable without row selection
   *      It also tells the Toolbar to display the delete icon
   */


  if (selectable) {
    hooks.push(selectionHook);

    handleDelete = function handleDelete() {
      var indices = selectedFlatRows.map(function (item) {
        return item.index;
      });
      var updatedData = filter__default['default'](data, function (item, index) {
        return !indices.includes(index);
      });
      setData(updatedData);
    };
  }

  var defaultColumn = React.useMemo(function () {
    return {
      Cell: EditableCell
    };
  }, []);

  var saveRow = function saveRow(row) {
    if (editing === null) return;
    var index = row.index,
        values = row.values;

    var newData = _toConsumableArray(data);

    newData[index] = values;
    setData(newData);
    setEditing(null);
    toggleAllRowsSelected(false);
  };

  var _useTable = reactTable.useTable.apply(void 0, [_objectSpread2(_objectSpread2({}, props), {}, {
    data: data,
    defaultColumn: defaultColumn,
    columns: columns,
    initialState: initialState,
    saveRow: saveRow
  })].concat(hooks)),
      rows = _useTable.rows,
      headerGroups = _useTable.headerGroups,
      getTableProps = _useTable.getTableProps,
      getTableBodyProps = _useTable.getTableBodyProps,
      prepareRow = _useTable.prepareRow,
      selectedFlatRows = _useTable.selectedFlatRows,
      toggleAllRowsSelected = _useTable.toggleAllRowsSelected;

  var handleAdd = function handleAdd() {
    if (!defaultItem) {
      console.error('No default item set, cannot add rows.');
      return;
    }

    var updatedData = [].concat(_toConsumableArray(data), [defaultItem]);
    setData(updatedData);
    setEditing(updatedData.length - 1);
  };

  var handleReset = function handleReset() {
    setData(initialData);
  };

  var handleEdit = function handleEdit() {
    if (selectedFlatRows.length !== 1) {
      console.error('Cannot edit row count != 1.');
      return;
    }

    var _selectedFlatRows = _slicedToArray(selectedFlatRows, 1),
        selectedRow = _selectedFlatRows[0];

    setEditing(selectedRow.index);
  };

  React.useEffect(function () {
    if (!editing && !initialRender && handleChange) {
      handleChange(data);
    }

    setInitialRender(false);
  }, [data, editing]);
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(TableToolbar, {
    canAdd: editing === null,
    canDelete: selectedFlatRows.length > 0,
    canEdit: selectedFlatRows.length === 1,
    canReset: data.length !== initialData.length,
    handleAdd: handleAdd,
    handleDelete: handleDelete,
    handleEdit: handleEdit,
    handleReset: handleReset
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
  }, /*#__PURE__*/React__default['default'].createElement("table", _extends({
    className: "min-w-full divide-y divide-gray-200"
  }, getTableProps()), /*#__PURE__*/React__default['default'].createElement("thead", {
    className: "bg-gray-50"
  }, headerGroups.map(function (headerGroup, rowIndex) {
    return /*#__PURE__*/React__default['default'].createElement("tr", _extends({
      className: "border-b border-gray-200"
    }, headerGroup.getHeaderGroupProps()), headerGroup.headers.map(function (column) {
      return /*#__PURE__*/React__default['default'].createElement("th", _extends({}, column.getHeaderProps(), {
        scope: "col",
        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ".concat(rowIndex === 0 ? 'text-center border-l border-r border-gray-200' : '')
      }), column.render('Header'));
    }));
  })), /*#__PURE__*/React__default['default'].createElement("tbody", _extends({}, getTableBodyProps(), {
    className: "bg-white divide-y divide-gray-200"
  }), rows.map(function (row) {
    prepareRow(row);
    return /*#__PURE__*/React__default['default'].createElement(TableRow, {
      key: row.index,
      row: row,
      editing: editing,
      saveRow: saveRow
    });
  }))))))));
};

exports.DataTable = DataTable;
exports.EditableCell = EditableCell;
exports.TableRow = TableRow;
exports.TableToolbar = TableToolbar;