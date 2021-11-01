import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useTable, useAsyncDebounce, useSortBy, usePagination, useRowSelect } from 'react-table';
import filter from 'lodash/filter';
import { PlusIcon, PencilIcon, TrashIcon, ReplyIcon, ChevronDoubleLeftIcon, ArrowSmLeftIcon, ArrowSmRightIcon, ChevronDoubleRightIcon, CheckIcon, ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/outline';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useHotkeys } from 'react-hotkeys-hook';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { find } from 'lodash';
import Select from 'react-select';

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

styled.div.withConfig({
  displayName: "wrappers__FlexColumn",
  componentId: "sc-1pzcc2n-0"
})(["display:flex;flex-direction:column;"]);

var GlobalStyle = createGlobalStyle(["table{", " & > * + *{", "}thead{", "}tbody{", "}tr{", "}th{", " &:first-child{", "}}td{", " &:first-child{", "}}}"], function (props) {
  var _props$theme$elements;

  return ((_props$theme$elements = props.theme.elements) === null || _props$theme$elements === void 0 ? void 0 : _props$theme$elements.table) && props.theme.elements.table;
}, function (props) {
  var _props$theme$elements2;

  return ((_props$theme$elements2 = props.theme.elements) === null || _props$theme$elements2 === void 0 ? void 0 : _props$theme$elements2.table) && props.theme.elements.table['& > * + *'];
}, function (props) {
  var _props$theme$elements3;

  return ((_props$theme$elements3 = props.theme.elements) === null || _props$theme$elements3 === void 0 ? void 0 : _props$theme$elements3.thead) && props.theme.elements.thead;
}, function (props) {
  var _props$theme$elements4;

  return ((_props$theme$elements4 = props.theme.elements) === null || _props$theme$elements4 === void 0 ? void 0 : _props$theme$elements4.tbody) && props.theme.elements.tbody;
}, function (props) {
  var _props$theme$elements5;

  return ((_props$theme$elements5 = props.theme.elements) === null || _props$theme$elements5 === void 0 ? void 0 : _props$theme$elements5.tr) && props.theme.elements.tr;
}, function (props) {
  var _props$theme$elements6;

  return ((_props$theme$elements6 = props.theme.elements) === null || _props$theme$elements6 === void 0 ? void 0 : _props$theme$elements6.th) && props.theme.elements.th;
}, function (props) {
  var _props$theme$elements7;

  return ((_props$theme$elements7 = props.theme.elements) === null || _props$theme$elements7 === void 0 ? void 0 : _props$theme$elements7.th) && props.theme.elements.th['&:first-child'];
}, function (props) {
  var _props$theme$elements8;

  return ((_props$theme$elements8 = props.theme.elements) === null || _props$theme$elements8 === void 0 ? void 0 : _props$theme$elements8.td) && props.theme.elements.td;
}, function (props) {
  var _props$theme$elements9;

  return ((_props$theme$elements9 = props.theme.elements) === null || _props$theme$elements9 === void 0 ? void 0 : _props$theme$elements9.td) && props.theme.elements.td['&:first-child'];
});

var defaultTheme = {
  'border-b': 'border-bottom-width: 1px;',
  colors: {
    lightGray: 'rgba(229, 231, 235, 1)',
    gray: 'rgba(156, 163, 175, 1)',
    darkGray: 'rgba(55, 65, 81, 1)'
  },
  elements: {
    table: {
      minWidth: '100%',
      '& > * + *': {
        borderTopWidth: '1px',
        borderBottomWidth: '1px',
        borderColor: 'rgba(229, 231, 235)'
      }
    },
    tbody: {
      background: 'white',
      '& > * + *': {
        borderTopWidth: '1px',
        borderBottomWidth: '1px',
        // borderColor: 'rgba(229, 231, 235)'
        borderColor: "green"
      }
    },
    thead: {
      backgroundColor: 'rgba(249, 250, 251)'
    },
    tr: {
      borderTopWidth: '1px',
      borderBottomWidth: '1px',
      borderColor: 'rgba(245, 231, 235)'
    },
    th: {
      padding: '.75rem 1.5rem .75rem 1.5rem',
      textAlign: 'left',
      fontSize: '.75rem',
      lineHeight: '1rem',
      fontWeight: '500',
      color: 'rgba(107, 114, 128)',
      textTransform: 'uppercase',
      letterSpacing: '.1em',
      '&:first-child': {
        textAlign: 'center',
        borderLeftWidth: '1px',
        borderRightWidth: '1px',
        borderColor: 'rgba(229, 231, 235)'
      }
    },
    td: {
      padding: '.75rem 1.5rem .75rem 1.5rem',
      fontSize: '.75rem',
      lineHeight: '1rem',
      fontWeight: '500',
      '&:first-child': {
        width: '2rem',
        textAlign: 'center'
      }
    }
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
  var children = _ref.children,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? defaultTheme : _ref$theme;
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(GlobalStyle, null), children);
};

var StyledDataTable = styled.div.withConfig({
  displayName: "styled__StyledDataTable",
  componentId: "sc-smya6t-0"
})(["overflow-x:auto;padding-top:.5rem;padding-bottom:.5rem;&.sticky{max-height:600px;th{position:sticky;top:-10px;z-index:1;background-color:rgb(245,245,245);}}@media(min-width:", "){padding-left:1rem;padding-right:1rem;}@media(min-width:", "){padding-left:1.5rem;padding-right:1.5rem;}.sort-indicator{height:2rem;}table{padding-bottom:.5rem;vertical-align:middle;min-width:100%;", " ", " --tw-border-opacity:1;border-color:rgba(229,231,235,var(--tw-border-opacity));@media(min-width:", "){", "}", "}"], function (props) {
  return props.theme.screens.sm;
}, function (props) {
  return props.theme.screens.lg;
}, function (props) {
  return props.theme.shadow;
}, function (props) {
  return props.theme['border-b'];
}, function (props) {
  return props.theme.screens.sm;
}, function (props) {
  return props.theme.overrides;
}, function (props) {
  return props.theme.overrides;
});

var StyledTableToolbar = styled.div.withConfig({
  displayName: "styled__StyledTableToolbar",
  componentId: "sc-bz7lb6-0"
})(["display:flex;width:100%;margin:1rem;svg{height:1.5rem;width:1.5rem;margin-left:.5rem;margin-right:.5rem;color:", ";&.enabled{color:", ";cursor:pointer;&:hover{color:", ";}}}"], function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.colors.gray;
}, function (props) {
  return props.theme.colors.darkGray;
});

var TableToolbar = function TableToolbar(props) {
  var canAdd = props.canAdd,
      canDelete = props.canDelete,
      canEdit = props.canEdit,
      canReset = props.canReset,
      handleAdd = props.handleAdd,
      handleDelete = props.handleDelete,
      handleEdit = props.handleEdit,
      handleReset = props.handleReset;
  return /*#__PURE__*/React.createElement(StyledTableToolbar, null, handleAdd && /*#__PURE__*/React.createElement("div", {
    title: "Add Row"
  }, /*#__PURE__*/React.createElement(PlusIcon, {
    className: "".concat(canAdd ? 'enabled' : ''),
    onClick: handleAdd
  })), handleEdit && /*#__PURE__*/React.createElement("div", {
    title: "Edit Row"
  }, /*#__PURE__*/React.createElement(PencilIcon, {
    className: "".concat(canEdit ? 'enabled' : ''),
    onClick: handleEdit
  })), handleDelete && /*#__PURE__*/React.createElement("div", {
    title: "Delete Row(s)"
  }, /*#__PURE__*/React.createElement(TrashIcon, {
    className: "".concat(canDelete ? 'enabled' : ''),
    onClick: handleDelete
  })), handleReset && /*#__PURE__*/React.createElement("div", {
    title: "Reset Table"
  }, /*#__PURE__*/React.createElement(ReplyIcon, {
    "aria-disabled": !canReset,
    className: "".concat(canReset ? 'enabled' : ''),
    onClick: canReset ? handleReset : undefined
  })));
};

var TableRow = function TableRow(props) {
  var className = props.className,
      row = props.row,
      editing = props.editing,
      saveRow = props.saveRow,
      selectable = props.selectable;

  var _useState = useState(row),
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

  return /*#__PURE__*/React.createElement("tr", _extends({}, row.getRowProps(), {
    className: className
  }), row.cells.map(function (cell, index) {
    return /*#__PURE__*/React.createElement("td", _extends({
      className: " ".concat(index === 0 && 'w-8')
    }, cell.getCellProps()), cell.render('Cell', {
      isEditable: editing === row.index,
      editing: editing,
      onChange: onChange,
      handleSaveRow: handleSaveRow,
      index: index,
      selectable: selectable
    }));
  }));
};

styled(TableRow).withConfig({
  displayName: "styled__StyledTableRow",
  componentId: "sc-1dh9xw2-0"
})(["td{padding-left:1.5rem;padding-right:1.5rem;padding-top:.75rem;padding-bottom:.7rem;font-size:.75rem;line-height:1rem;font-weight:500;&:first-child{}}"]);

var customStyles = {
  menu: function menu() {
    return {
      width: 150,
      color: '#000',
      padding: 1,
      background: '#fff',
      fontSize: 12
    };
  },
  control: function control() {
    return {
      width: 150,
      height: 25,
      display: 'flex',
      color: '#000'
    };
  },
  indicatorSeparator: function indicatorSeparator() {
    return {
      display: 'none'
    };
  },
  indicatorsContainer: function indicatorsContainer() {
    return {
      display: 'none'
    };
  },
  singleValue: function singleValue() {
    var color = '#000';
    var opacity = 1;
    var transition = 'opacity 300ms';
    return {
      opacity: opacity,
      transition: transition,
      color: color
    };
  }
};
var SelectCell = function SelectCell(_ref) {
  var handleChange = _ref.handleChange,
      options = _ref.options,
      setFocus = _ref.setFocus;

  var onChange = function onChange(value) {
    handleChange(value);
  };

  var selectRef = useRef(null);
  useEffect(function () {
    if (setFocus) {
      selectRef.current && selectRef.current.focus();
    }
  }, []);
  return /*#__PURE__*/React.createElement(Select, {
    options: options,
    onChange: onChange,
    menuPortalTarget: document.body,
    menuPosition: "fixed",
    styles: customStyles,
    className: "border-0 border-b border-blue-400 border-solid",
    ref: selectRef
  });
};

var getOptionLabel = function getOptionLabel(value, options) {
  var option = find(options, {
    value: value
  });
  return option === null || option === void 0 ? void 0 : option.label;
}; // Select option typeguard

var EditableCell = function EditableCell(_ref) {
  var initialValue = _ref.value,
      _ref$column = _ref.column,
      id = _ref$column.id,
      options = _ref$column.options,
      isEditable = _ref.isEditable,
      onChange = _ref.onChange,
      index = _ref.index,
      selectable = _ref.selectable;

  var _useState = useState(initialValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = useState(true),
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

    if (id) {
      onChange(id, newValue);
    }
  };

  useEffect(function () {
    if (id && !initialRender) {
      onChange(id, value);
    }

    setInitialRender(false);
  }, [value, id]);

  if (!isEditable) {
    // If this is a selectable cell
    if (options) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, getOptionLabel(value, options));
    }

    return /*#__PURE__*/React.createElement(React.Fragment, null, value);
  }

  if (options && options.length > 0) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SelectCell, {
      options: options,
      handleChange: onSelectChange
      /*
        The focus needs to be on the first input of the Row, 
        but datatable has two options, when the select option 
        is activated (cell #1) and when not (cell #0), 
        so it evaluates that with the cell index to determine 
        if the input will be focusable.
      */
      ,
      setFocus: index == (selectable ? 1 : 0) ? true : false
    }));
  }

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
    className: "border-b border-blue-400",
    value: value || '',
    onChange: onLocalChange
    /*
      The focus needs to be on the first input of the Row, 
      but datatable has two options, when the select option 
      is activated (cell #1) and when not (cell #0), 
      so it evaluates that with the cell index to determine 
      if the input will be focusable.
    */
    ,
    autoFocus: index == (selectable ? 1 : 0) ? true : false
  }));
};

var StyledPagination = styled.div.withConfig({
  displayName: "styled__StyledPagination",
  componentId: "sc-1nzqryg-0"
})(["display:flex;width:100%;align-items:center;justify-content:space-between;margin-top:10px;svg{height:1.5rem;width:1.5rem;padding:5px;border:1px solid ", ";color:", ";&.enabled{color:", ";cursor:pointer;&:hover{color:", ";background:", ";}}}select{padding-bottom:5px;padding-left:5px;padding-right:15px;padding-top:5px;border-radius:5px;border-color:", ";}input{padding:5px;border-radius:5px;border-color:", ";border-width:1px;background-color:transparent;}"], function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.colors.gray;
}, function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.colors.gray;
}, function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.colors.lightGray;
});

var Pagination = function Pagination(_ref) {
  var gotoPage = _ref.gotoPage,
      canPreviousPage = _ref.canPreviousPage,
      previousPage = _ref.previousPage,
      canNextPage = _ref.canNextPage,
      nextPage = _ref.nextPage,
      pageIndex = _ref.pageIndex,
      pageOptions = _ref.pageOptions,
      pageSize = _ref.pageSize,
      pageCount = _ref.pageCount,
      setPageSize = _ref.setPageSize;
  return /*#__PURE__*/React.createElement(StyledPagination, {
    className: "pagination"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Page", ' ', /*#__PURE__*/React.createElement("strong", null, pageIndex + 1, " of ", pageOptions.length), ' '), /*#__PURE__*/React.createElement("span", null, "| Go to page:", ' ', /*#__PURE__*/React.createElement("input", {
    type: "number",
    defaultValue: pageIndex + 1,
    onChange: function onChange(e) {
      var page = e.target.value ? Number(e.target.value) - 1 : 0;
      gotoPage(page);
    },
    style: {
      width: '100px'
    }
  })), ' ', /*#__PURE__*/React.createElement("select", {
    value: pageSize,
    onChange: function onChange(e) {
      setPageSize(Number(e.target.value));
    }
  }, [10, 20, 30, 40, 50].map(function (pageSize) {
    return /*#__PURE__*/React.createElement("option", {
      key: pageSize,
      value: pageSize
    }, "Show ", pageSize);
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ChevronDoubleLeftIcon, {
    onClick: function onClick() {
      return gotoPage(0);
    },
    className: "".concat(canPreviousPage ? 'enabled' : '')
  }), /*#__PURE__*/React.createElement(ArrowSmLeftIcon, {
    onClick: function onClick() {
      return previousPage();
    },
    className: "".concat(canPreviousPage ? 'enabled' : '')
  }), /*#__PURE__*/React.createElement(ArrowSmRightIcon, {
    onClick: function onClick() {
      return nextPage();
    },
    className: "".concat(canNextPage ? 'enabled' : '')
  }), /*#__PURE__*/React.createElement(ChevronDoubleRightIcon, {
    onClick: function onClick() {
      return gotoPage(pageCount - 1);
    },
    className: "".concat(canNextPage ? 'enabled' : '')
  })));
};

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var _excluded = ["indeterminate"];
var IndeterminateCheckbox = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var indeterminate = _ref.indeterminate,
      rest = _objectWithoutProperties(_ref, _excluded);

  var defaultRef = React.useRef(null);
  var resolvedRef = ref || defaultRef;
  React.useEffect(function () {
    var currentRef = resolvedRef.current;

    if (currentRef) {
      currentRef.indeterminate = indeterminate !== null && indeterminate !== void 0 ? indeterminate : false;
    }
  }, [resolvedRef, indeterminate]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    ref: resolvedRef
  }, rest)));
});

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
        return /*#__PURE__*/React.createElement(IndeterminateCheckbox, _extends({
          className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-400 rounded"
        }, getToggleAllRowsSelectedProps()));
      },
      Cell: function Cell(_ref2) {
        var row = _ref2.row,
            editing = _ref2.editing,
            handleSaveRow = _ref2.handleSaveRow;

        if (editing === row.index) {
          var optionsHot = {
            enableOnTags: ['INPUT']
          };
          useHotkeys('ctrl+enter', function () {
            return handleSaveRow();
          }, optionsHot);
          return /*#__PURE__*/React.createElement(CheckIcon, {
            className: "w-4 border border-green-600 bg-green-200 rounded-md cursor-pointer hover:bg-green-600",
            onClick: handleSaveRow
          });
        }

        return /*#__PURE__*/React.createElement(IndeterminateCheckbox, _extends({
          className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        }, row.getToggleRowSelectedProps()));
      }
    }].concat(_toConsumableArray(columns));
  });
};
function usePrevious(value) {
  var ref = useRef(value);
  useEffect(function () {
    ref.current = value;
  });
  return ref.current;
}

var DataTable = function DataTable(props) {
  // Set up internal react-table hooks to be used by useTable
  var hooks = [useSortBy, usePagination, useRowSelect]; // Only set this value if we're able to delete rows

  var handleDelete;
  var data = props.data,
      columns = props.columns,
      defaultItem = props.defaultItem,
      _props$disableToolbar = props.disableToolbar,
      disableToolbar = _props$disableToolbar === void 0 ? false : _props$disableToolbar,
      handleChange = props.handleChange,
      _props$handleFetchDat = props.handleFetchData,
      handleFetchData = _props$handleFetchDat === void 0 ? undefined : _props$handleFetchDat,
      _props$paginated = props.paginated,
      paginated = _props$paginated === void 0 ? false : _props$paginated,
      _props$selectable = props.selectable,
      selectable = _props$selectable === void 0 ? false : _props$selectable,
      tableRow = props.tableRow,
      tableToolbar = props.tableToolbar,
      _props$theme = props.theme,
      theme = _props$theme === void 0 ? defaultTheme : _props$theme,
      _props$stickyHeader = props.stickyHeader,
      stickyHeader = _props$stickyHeader === void 0 ? false : _props$stickyHeader;
  /** Table State */

  var _useState = useState(data),
      _useState2 = _slicedToArray(_useState, 2);
      _useState2[0];
      _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      editing = _useState4[0],
      setEditing = _useState4[1];

  var _useState5 = useState(data),
      _useState6 = _slicedToArray(_useState5, 2),
      tableData = _useState6[0],
      setData = _useState6[1];
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
      var updatedData = filter(data, function (item, index) {
        return !indices.includes(index);
      });
      setData(updatedData);
    };
  } // Set up the default column for useTable


  var defaultColumn = useMemo(function () {
    return {
      Cell: EditableCell
    };
  }, []); // Local function passed to useTable and can be used in other components

  var saveRow = function saveRow(row) {
    if (editing === null) return;
    var index = row.index,
        values = row.values;

    var newData = _toConsumableArray(tableData);

    newData[index] = values;
    setData(newData);
    setEditing(null);
    toggleAllRowsSelected(false);
    handleChange(newData);
  };

  var handleAdd = function handleAdd() {
    if (!defaultItem) {
      console.error('No default item set, cannot add rows.');
      return;
    }

    var updatedData = [].concat(_toConsumableArray(tableData), [defaultItem]);
    setData(updatedData);
    setEditing(updatedData.length - 1);
  };

  var handleReset = function handleReset() {
    setData(data);
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

  var handleCancel = function handleCancel() {
    var lastRow = tableData.length - 1;

    if (data.length == tableData.length || editing != lastRow) {
      setData(tableData);
      setEditing(tableData.length);
    } else {
      var updatedData = filter(tableData, function (item, index) {
        return index != lastRow;
      });
      setData(updatedData);
      setEditing(updatedData.length);
    }
  };

  var _useTable = useTable.apply(void 0, [_objectSpread2(_objectSpread2({}, props), {}, {
    data: tableData,
    defaultColumn: defaultColumn,
    columns: columns,
    saveRow: saveRow,
    pageCount: -1,
    manualPagination: handleFetchData ? true : false
  })].concat(hooks)),
      rows = _useTable.rows,
      headerGroups = _useTable.headerGroups,
      getTableProps = _useTable.getTableProps,
      getTableBodyProps = _useTable.getTableBodyProps,
      prepareRow = _useTable.prepareRow,
      selectedFlatRows = _useTable.selectedFlatRows,
      toggleAllRowsSelected = _useTable.toggleAllRowsSelected,
      page = _useTable.page,
      canPreviousPage = _useTable.canPreviousPage,
      canNextPage = _useTable.canNextPage,
      pageOptions = _useTable.pageOptions,
      pageCount = _useTable.pageCount,
      gotoPage = _useTable.gotoPage,
      nextPage = _useTable.nextPage,
      previousPage = _useTable.previousPage,
      setPageSize = _useTable.setPageSize,
      _useTable$state = _useTable.state,
      pageIndex = _useTable$state.pageIndex,
      pageSize = _useTable$state.pageSize,
      sortBy = _useTable$state.sortBy;

  var prevPageProps = usePrevious({
    pageIndex: pageIndex,
    pageSize: pageSize,
    sortBy: sortBy
  }); // If the incoming data changes, override the table data

  useEffect(function () {
    setData(data);
  }, [data]);
  var handleFetchDataDebounced = useAsyncDebounce(handleFetchData, 200); // If an handleFetchData handler is passed, use it to pull new data on page change

  useEffect(function () {
    if (handleFetchData && (pageSize !== (prevPageProps === null || prevPageProps === void 0 ? void 0 : prevPageProps.pageSize) && pageSize > 0 || pageIndex !== (prevPageProps === null || prevPageProps === void 0 ? void 0 : prevPageProps.pageIndex))) {
      handleFetchDataDebounced({
        pageIndex: pageIndex,
        pageSize: pageSize,
        sortBy: sortBy
      });
    }
  }, [useAsyncDebounce, handleFetchData, pageIndex, pageSize, sortBy]);
  var paginationProps = {
    pageIndex: pageIndex,
    pageSize: pageSize,
    pageCount: pageCount,
    canPreviousPage: canPreviousPage,
    canNextPage: canNextPage,
    pageOptions: pageOptions,
    gotoPage: gotoPage,
    nextPage: nextPage,
    previousPage: previousPage,
    setPageSize: setPageSize,
    async: handleFetchData ? true : false
  };
  var TableRowRender = tableRow ? tableRow : TableRow;
  var ToolbarRender = tableToolbar ? tableToolbar : TableToolbar;

  var Table = function Table() {
    useHotkeys('ctrl+n', function () {
      return handleAdd();
    });
    var optionsHot = {
      enableOnTags: ['INPUT']
    };
    useHotkeys('esc', function () {
      return handleCancel();
    }, optionsHot);
    return /*#__PURE__*/React.createElement("table", getTableProps(), /*#__PURE__*/React.createElement("thead", null, headerGroups.map(function (headerGroup, rowIndex) {
      return /*#__PURE__*/React.createElement("tr", headerGroup.getHeaderGroupProps(), headerGroup.headers.map(function (column) {
        return /*#__PURE__*/React.createElement("th", _extends({
          key: rowIndex
        }, column.getHeaderProps(column.getSortByToggleProps()), {
          scope: "col"
        }), column.render('Header'), /*#__PURE__*/React.createElement("span", null, column.isSorted ? column.isSortedDesc ? /*#__PURE__*/React.createElement(ArrowSmDownIcon, {
          className: "sort-indicator"
        }) : /*#__PURE__*/React.createElement(ArrowSmUpIcon, {
          className: "sort-indicator"
        }) : ''));
      }));
    })), /*#__PURE__*/React.createElement("tbody", getTableBodyProps(), !paginated ? rows.map(function (row) {
      prepareRow(row);
      return /*#__PURE__*/React.createElement(TableRowRender, {
        key: row.index,
        row: row,
        editing: editing,
        saveRow: saveRow,
        selectable: selectable
      });
    }) : page.map(function (row) {
      prepareRow(row);
      return /*#__PURE__*/React.createElement(TableRowRender, {
        key: row.index,
        row: row,
        editing: editing,
        saveRow: saveRow,
        selectable: selectable
      });
    })));
  };

  var InfiniteScrollTable = function InfiniteScrollTable() {
    return /*#__PURE__*/React.createElement(InfiniteScroll, {
      dataLength: rows.length,
      next: function next() {
        return handleFetchDataDebounced({
          pageSize: pageSize,
          pageCount: pageCount,
          sortBy: sortBy
        });
      },
      hasMore: true,
      loader: /*#__PURE__*/React.createElement("p", null, "Loading more items...")
    }, /*#__PURE__*/React.createElement(Table, null));
  };

  var PaginatedTable = function PaginatedTable() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Table, null), /*#__PURE__*/React.createElement(Pagination, paginationProps));
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TableThemeProvider, {
    theme: theme
  }, !disableToolbar || tableToolbar ? /*#__PURE__*/React.createElement(ToolbarRender, {
    canAdd: editing === null,
    canDelete: selectedFlatRows.length > 0,
    canEdit: selectedFlatRows.length === 1,
    canReset: tableData.length !== data.length,
    handleAdd: handleAdd,
    handleDelete: handleDelete,
    handleEdit: handleEdit,
    handleReset: handleReset
  }) : null, /*#__PURE__*/React.createElement(StyledDataTable, {
    className: stickyHeader ? 'sticky' : ''
  }, paginated ? paginated === 'scroll' ? /*#__PURE__*/React.createElement(InfiniteScrollTable, null) : /*#__PURE__*/React.createElement(PaginatedTable, null) : /*#__PURE__*/React.createElement(Table, null))));
};

export { DataTable, EditableCell, TableRow, TableToolbar };
