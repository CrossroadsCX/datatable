'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactTable = require('react-table');
var filter = require('lodash/filter');
var styled = require('styled-components');
var outline = require('@heroicons/react/outline');
var Select = require('react-select');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var filter__default = /*#__PURE__*/_interopDefault(filter);
var styled__default = /*#__PURE__*/_interopDefault(styled);
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

styled__default['default'].div.withConfig({
  displayName: "wrappers__FlexColumn",
  componentId: "sc-1pzcc2n-0"
})(["display:flex;flex-direction:column;"]);

var theme = {
  'border-b': 'border-bottom-width: 1px;',
  colors: {
    lightGray: 'rgba(229, 231, 235, 1)',
    gray: 'rgba(156, 163, 175, 1)',
    darkGray: 'rgba(55, 65, 81, 1)'
  },
  screens: {
    sm: '640px',
    // => @media (min-width: 640px) { ... }
    md: '768px',
    // => @media (min-width: 768px) { ... }
    lg: '1024px',
    // => @media (min-width: 1024px) { ... }
    xl: '1280px',
    // => @media (min-width: 1280px) { ... }
    '2xl': '1536px' // => @media (min-width: 1536px) { ... }

  },
  shadow: "\n    --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  "
};
var TableThemeProvider = function TableThemeProvider(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default['default'].createElement(styled.ThemeProvider, {
    theme: theme
  }, children);
};

var StyledDataTable = styled__default['default'].div.withConfig({
  displayName: "styled__StyledDataTable",
  componentId: "sc-smya6t-0"
})(["display:flex;flex-direction:column;& > div{margin-top:-.5rem;margin-bottom:-.5rem;overflow-x:auto;@media (min-width:", "){margin-left:-1.5rem;margin-right:-1.5rem;}@media (min-width:", "){margin-left:-2rem;margin-right:-2rem;}& > div{padding-top:.5rem;padding-bottom:.5rem;vertical-align:middle;display:inline-block;min-width:100%;@media(min-width:", "){padding-left:1.5rem;padding-right:1.5rem;}@media(min-width:", "){padding-left:2rem;padding-right:2rem;}& > div{", " ", " overflow:hidden;--tw-border-opacity:1;border-color:rgba(229,231,235,var(--tw-border-opacity));@media(min-width:", "){border-radius:0.5rem;}}}}table{min-width:100%;& > * + *{--tw-divide-y-reverse:0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse));--tw-divide-opacity:1;border-color:rgba(229,231,235,var(--tw-divide-opacity));}thead{--tw-bg-opacity:1;background-color:rgba(249,250,251,var(--tw-bg-opacity));}tbody{background:white;& > * + *{--tw-divide-y-reverse:0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse));--tw-divide-opacity:1;border-color:rgba(229,231,235,var(--tw-divide-opacity));}}tr{--tw-divide-y-reverse:0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse));--tw-border-opacity:1;border-color:rgba(229,231,235,var(--tw-border-opacity));}th{padding-left:1.5rem;padding-right:1.5rem;padding-top:0.75rem;padding-bottom:0.75rem;text-align:left;font-size:0.75rem;line-height:1rem;font-weight:500;--tw-text-opacity:1;color:rgba(107,114,128,var(--tw-text-opacity));text-transform:uppercase;letter-spacing:0.05em;&:first-child{text-align:center;border-left-width:1px;border-right-width:1px;--tw-border-opacity:1;border-color:rgba(229,231,235,var(--tw-border-opacity));}}td{padding-left:1.5rem;padding-right:1.5rem;padding-top:.75rem;padding-bottom:.75rem;font-size:0.75rem;line-height:1rem;font-weight:500;&:first-child{width:2rem;text-align:center;}}}"], function (props) {
  return props.theme.screens.sm;
}, function (props) {
  return props.theme.screens.lg;
}, function (props) {
  return props.theme.screens.sm;
}, function (props) {
  return props.theme.screens.lg;
}, function (props) {
  return props.theme.shadow;
}, function (props) {
  return props.theme['border-b'];
}, function (props) {
  return props.theme.screens.sm;
});

var StyledTableToolbar = styled__default['default'].div.withConfig({
  displayName: "styled__StyledTableToolbar",
  componentId: "sc-bz7lb6-0"
})(["display:flex;width:100%;margin:1rem;svg{height:1.5rem;width:1.5rem;margin-left:.5rem;margin-right:.5rem;color:", ";&.enabled{color:", ";cursor:pointer;&:hover{color:", ";}}}"], function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.colors.gray;
}, function (props) {
  return props.theme.colors.darkGray;
});

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
  return /*#__PURE__*/React__default['default'].createElement(StyledTableToolbar, null, handleAdd && /*#__PURE__*/React__default['default'].createElement("div", {
    title: "Add Row"
  }, /*#__PURE__*/React__default['default'].createElement(outline.PlusIcon, {
    className: "".concat(canAdd ? 'enabled' : ''),
    onClick: handleAdd
  })), handleEdit && /*#__PURE__*/React__default['default'].createElement("div", {
    title: "Edit Row"
  }, /*#__PURE__*/React__default['default'].createElement(outline.PencilIcon, {
    className: "".concat(canEdit ? 'enabled' : ''),
    onClick: handleEdit
  })), handleDelete && /*#__PURE__*/React__default['default'].createElement("div", {
    title: "Delete Row(s)"
  }, /*#__PURE__*/React__default['default'].createElement(outline.TrashIcon, {
    className: "".concat(canDelete ? 'enabled' : ''),
    onClick: handleDelete
  })), handleReset && /*#__PURE__*/React__default['default'].createElement("div", {
    title: "Reset Table"
  }, /*#__PURE__*/React__default['default'].createElement(outline.ReplyIcon, {
    "aria-disabled": !canReset,
    className: "".concat(canReset ? 'enabled' : ''),
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
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(TableThemeProvider, null, /*#__PURE__*/React__default['default'].createElement(TableToolbar, {
    canAdd: editing === null,
    canDelete: selectedFlatRows.length > 0,
    canEdit: selectedFlatRows.length === 1,
    canReset: data.length !== initialData.length,
    handleAdd: handleAdd,
    handleDelete: handleDelete,
    handleEdit: handleEdit,
    handleReset: handleReset
  }), /*#__PURE__*/React__default['default'].createElement(StyledDataTable, null, /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("table", getTableProps(), /*#__PURE__*/React__default['default'].createElement("thead", null, headerGroups.map(function (headerGroup, rowIndex) {
    return /*#__PURE__*/React__default['default'].createElement("tr", headerGroup.getHeaderGroupProps(), headerGroup.headers.map(function (column) {
      return /*#__PURE__*/React__default['default'].createElement("th", _extends({}, column.getHeaderProps(), {
        scope: "col"
      }), column.render('Header'));
    }));
  })), /*#__PURE__*/React__default['default'].createElement("tbody", getTableBodyProps(), rows.map(function (row) {
    prepareRow(row);
    return /*#__PURE__*/React__default['default'].createElement(TableRow, {
      key: row.index,
      row: row,
      editing: editing,
      saveRow: saveRow
    });
  })))))))));
};

exports.DataTable = DataTable;
exports.EditableCell = EditableCell;
exports.TableRow = TableRow;
exports.TableToolbar = TableToolbar;
