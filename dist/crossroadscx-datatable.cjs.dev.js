'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactTable = require('react-table');
var filter = require('lodash/filter');
var outline = require('@heroicons/react/outline');
var InfiniteScroll = require('react-infinite-scroll-component');
var reactHotkeysHook = require('react-hotkeys-hook');
var styled = require('styled-components');
var jsxRuntime = require('react/jsx-runtime');
var lodash = require('lodash');
var CreatableSelect = require('react-select/creatable');
var Select = require('react-select');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var filter__default = /*#__PURE__*/_interopDefault(filter);
var InfiniteScroll__default = /*#__PURE__*/_interopDefault(InfiniteScroll);
var styled__default = /*#__PURE__*/_interopDefault(styled);
var CreatableSelect__default = /*#__PURE__*/_interopDefault(CreatableSelect);
var Select__default = /*#__PURE__*/_interopDefault(Select);

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

var GlobalStyle = styled__default['default'].div.withConfig({
  displayName: "global__GlobalStyle",
  componentId: "sc-1wcmw54-0"
})(["&{position:relative}table{", " & > * + *{", "}thead{", "}tbody{", "}tr{", "}th{", " &:first-child{", "}}td{", " &:first-child{", "}}}"], function (props) {
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
        borderColor: 'rgba(229, 231, 235)'
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
  return /*#__PURE__*/jsxRuntime.jsx(styled.ThemeProvider, {
    theme: theme,
    children: /*#__PURE__*/jsxRuntime.jsx(GlobalStyle, {
      children: children
    })
  });
};

var StyledDataTable = styled__default['default'].div.withConfig({
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

var TableToolbar = function TableToolbar(props) {
  var canAdd = props.canAdd,
      canDelete = props.canDelete,
      canEdit = props.canEdit,
      canReset = props.canReset,
      handleAdd = props.handleAdd,
      handleDelete = props.handleDelete,
      handleEdit = props.handleEdit,
      handleReset = props.handleReset;
  return /*#__PURE__*/jsxRuntime.jsxs(StyledTableToolbar, {
    children: [handleAdd && /*#__PURE__*/jsxRuntime.jsx("div", {
      title: "Add Row",
      children: /*#__PURE__*/jsxRuntime.jsx(outline.PlusIcon, {
        className: "".concat(canAdd ? 'enabled' : ''),
        onClick: handleAdd
      })
    }), handleEdit && /*#__PURE__*/jsxRuntime.jsx("div", {
      title: "Edit Row",
      children: /*#__PURE__*/jsxRuntime.jsx(outline.PencilIcon, {
        className: "".concat(canEdit ? 'enabled' : ''),
        onClick: handleEdit
      })
    }), handleDelete && /*#__PURE__*/jsxRuntime.jsx("div", {
      title: "Delete Row(s)",
      children: /*#__PURE__*/jsxRuntime.jsx(outline.TrashIcon, {
        className: "".concat(canDelete ? 'enabled' : ''),
        onClick: handleDelete
      })
    }), handleReset && /*#__PURE__*/jsxRuntime.jsx("div", {
      title: "Reset Table",
      children: /*#__PURE__*/jsxRuntime.jsx(outline.ReplyIcon, {
        "aria-disabled": !canReset,
        className: "".concat(canReset ? 'enabled' : ''),
        onClick: canReset ? handleReset : undefined
      })
    })]
  });
};

var TableRow = function TableRow(props) {
  var className = props.className,
      row = props.row,
      editing = props.editing,
      saveRow = props.saveRow,
      selectable = props.selectable;

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

  return /*#__PURE__*/jsxRuntime.jsx("tr", _objectSpread2(_objectSpread2({}, row.getRowProps()), {}, {
    className: className,
    children: row.cells.map(function (cell, index) {
      return /*#__PURE__*/jsxRuntime.jsx("td", _objectSpread2(_objectSpread2({
        className: " ".concat(index === 0 && 'w-8')
      }, cell.getCellProps()), {}, {
        children: cell.render('Cell', {
          isEditable: editing === row.index,
          editing: editing,
          onChange: onChange,
          handleSaveRow: handleSaveRow,
          index: index,
          selectable: selectable
        })
      }));
    })
  }));
};

styled__default['default'](TableRow).withConfig({
  displayName: "styled__StyledTableRow",
  componentId: "sc-1dh9xw2-0"
})(["td{padding-left:1.5rem;padding-right:1.5rem;padding-top:.75rem;padding-bottom:.7rem;font-size:.75rem;line-height:1rem;font-weight:500;&:first-child{}}"]);

var customStyles = {
  container: function container() {
    return {
      position: 'absolute',
      marginTop: -10,
      marginLeft: -10
    };
  },
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
      setFocus = _ref.setFocus,
      handleOnCreate = _ref.handleOnCreate,
      defaultValue = _ref.defaultValue;

  var onChange = function onChange(value) {
    handleChange(value);
  };

  var _useState = React.useState(defaultValue != null ? options.filter(function (option) {
    return option.value === defaultValue;
  }) : []),
      _useState2 = _slicedToArray(_useState, 2),
      defaultOption = _useState2[0],
      setDefaultOption = _useState2[1];

  var selectRef = React.useRef(null);
  var selectCreationRef = React.useRef(null);

  var _useState3 = React.useState(defaultValue),
      _useState4 = _slicedToArray(_useState3, 2),
      newDefaultValue = _useState4[0],
      setNewDefaultValue = _useState4[1];

  var _useState5 = React.useState(),
      _useState6 = _slicedToArray(_useState5, 2),
      isLoading = _useState6[0],
      setIsLoading = _useState6[1];

  React.useEffect(function () {
    if (setFocus) {
      selectRef.current && selectRef.current.focus();
      selectCreationRef.current && selectCreationRef.current.focus();
    }
  }, []);
  React.useEffect(function () {
    var newOption = newDefaultValue != null ? options.filter(function (option) {
      return option.label === newDefaultValue;
    }) : [];
    setDefaultOption(newOption);
  }, [options, newDefaultValue]);
  React.useEffect(function () {
    if ((defaultOption === null || defaultOption === void 0 ? void 0 : defaultOption.length) > 0) {
      setIsLoading(false);
      handleChange(defaultOption[0]);
    }
  }, [defaultOption]);

  if (handleOnCreate) {
    return /*#__PURE__*/jsxRuntime.jsx(CreatableSelect__default['default'], {
      onChange: function onChange(event) {
        handleChange(event);
        setNewDefaultValue(event === null || event === void 0 ? void 0 : event.label);
      },
      onCreateOption: function onCreateOption(event) {
        setIsLoading(true);
        handleOnCreate(event);
        setNewDefaultValue(event);
      },
      isDisabled: isLoading,
      isLoading: isLoading,
      options: options,
      value: defaultOption,
      defaultValue: defaultOption,
      className: "border-0 border-b border-blue-400 border-solid",
      styles: customStyles,
      ref: selectCreationRef
    });
  }

  return /*#__PURE__*/jsxRuntime.jsx(Select__default['default'], {
    options: options,
    onChange: onChange,
    menuPortalTarget: document.body,
    menuPosition: "fixed",
    styles: customStyles,
    className: "border-0 border-b border-blue-400 border-solid",
    ref: selectRef,
    defaultValue: defaultOption
  });
};

var getOptionLabel = function getOptionLabel(value, options) {
  var option = lodash.find(options, {
    value: value
  });
  return option === null || option === void 0 ? void 0 : option.label;
}; // Select option typeguard
// const isSelectOption = (value: OptionTypeBase | string | number): value is OptionTypeBase => {
//   if (typeof value === 'object' && value?.label) return true
//   return false
// }


var EditableCell = function EditableCell(_ref) {
  var initialValue = _ref.value,
      _ref$column = _ref.column,
      id = _ref$column.id,
      options = _ref$column.options,
      inputType = _ref$column.inputType,
      handleOnCreate = _ref$column.handleOnCreate,
      isEditable = _ref.isEditable,
      onChange = _ref.onChange,
      index = _ref.index,
      selectable = _ref.selectable;

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
    if (selectOption) {
      var newValue = selectOption.value;
      setValue(newValue);

      if (id) {
        onChange(id, newValue);
      }
    }
  };

  React.useEffect(function () {
    if (id && !initialRender) {
      onChange(id, value);
    }

    setInitialRender(false);
  }, [value, id]);

  if (!isEditable) {
    // If this is a selectable cell
    if (typeof value == 'string' && options) {
      return /*#__PURE__*/jsxRuntime.jsx(jsxRuntime.Fragment, {
        children: getOptionLabel(value, options)
      });
    }

    return /*#__PURE__*/jsxRuntime.jsx(jsxRuntime.Fragment, {
      children: value
    });
  }

  var localStyles = {
    width: 150
  };

  if (options && options.length > 0) {
    return /*#__PURE__*/jsxRuntime.jsx("div", {
      style: localStyles,
      children: /*#__PURE__*/jsxRuntime.jsx(SelectCell, {
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
        setFocus: index == (selectable ? 1 : 0) ? true : false,
        defaultValue: value,
        handleOnCreate: handleOnCreate
      })
    });
  }

  return /*#__PURE__*/jsxRuntime.jsx("div", {
    children: /*#__PURE__*/jsxRuntime.jsx("input", {
      className: "border-b border-blue-400",
      value: value || '',
      onChange: onLocalChange,
      type: inputType ? inputType : 'text'
      /*
        The focus needs to be on the first input of the Row, 
        but datatable has two options, when the select option 
        is activated (cell #1) and when not (cell #0), 
        so it evaluates that with the cell index to determine 
        if the input will be focusable.
      */
      ,
      autoFocus: index == (selectable ? 1 : 0) ? true : false
    })
  });
};

var StyledPagination = styled__default['default'].div.withConfig({
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
  return /*#__PURE__*/jsxRuntime.jsxs(StyledPagination, {
    className: "pagination",
    children: [/*#__PURE__*/jsxRuntime.jsxs("div", {
      children: [/*#__PURE__*/jsxRuntime.jsxs("span", {
        children: ["Page", ' ', /*#__PURE__*/jsxRuntime.jsxs("strong", {
          children: [pageIndex + 1, " of ", pageOptions.length]
        }), ' ']
      }), /*#__PURE__*/jsxRuntime.jsxs("span", {
        children: ["| Go to page:", ' ', /*#__PURE__*/jsxRuntime.jsx("input", {
          type: "number",
          defaultValue: pageIndex + 1,
          onChange: function onChange(e) {
            var page = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(page);
          },
          style: {
            width: '100px'
          }
        })]
      }), ' ', /*#__PURE__*/jsxRuntime.jsx("select", {
        value: pageSize,
        onChange: function onChange(e) {
          setPageSize(Number(e.target.value));
        },
        children: [10, 20, 30, 40, 50].map(function (pageSize) {
          return /*#__PURE__*/jsxRuntime.jsxs("option", {
            value: pageSize,
            children: ["Show ", pageSize]
          }, pageSize);
        })
      })]
    }), /*#__PURE__*/jsxRuntime.jsxs("div", {
      children: [/*#__PURE__*/jsxRuntime.jsx(outline.ChevronDoubleLeftIcon, {
        onClick: function onClick() {
          return gotoPage(0);
        },
        className: "".concat(canPreviousPage ? 'enabled' : '')
      }), /*#__PURE__*/jsxRuntime.jsx(outline.ArrowSmLeftIcon, {
        onClick: function onClick() {
          return previousPage();
        },
        className: "".concat(canPreviousPage ? 'enabled' : '')
      }), /*#__PURE__*/jsxRuntime.jsx(outline.ArrowSmRightIcon, {
        onClick: function onClick() {
          return nextPage();
        },
        className: "".concat(canNextPage ? 'enabled' : '')
      }), /*#__PURE__*/jsxRuntime.jsx(outline.ChevronDoubleRightIcon, {
        onClick: function onClick() {
          return gotoPage(pageCount - 1);
        },
        className: "".concat(canNextPage ? 'enabled' : '')
      })]
    })]
  });
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
var IndeterminateCheckbox = /*#__PURE__*/React__default['default'].forwardRef(function (_ref, ref) {
  var indeterminate = _ref.indeterminate,
      rest = _objectWithoutProperties(_ref, _excluded);

  var defaultRef = React__default['default'].useRef(null);
  var resolvedRef = ref || defaultRef;
  React__default['default'].useEffect(function () {
    var currentRef = resolvedRef.current;

    if (currentRef) {
      currentRef.indeterminate = indeterminate !== null && indeterminate !== void 0 ? indeterminate : false;
    }
  }, [resolvedRef, indeterminate]);
  return /*#__PURE__*/jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: /*#__PURE__*/jsxRuntime.jsx("input", _objectSpread2({
      type: "checkbox",
      ref: resolvedRef
    }, rest))
  });
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
        return /*#__PURE__*/jsxRuntime.jsx(IndeterminateCheckbox, _objectSpread2({
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
          reactHotkeysHook.useHotkeys('ctrl+enter', function () {
            return handleSaveRow();
          }, optionsHot);
          return /*#__PURE__*/jsxRuntime.jsx(outline.CheckIcon, {
            className: "w-4 border border-green-600 bg-green-200 rounded-md cursor-pointer hover:bg-green-600",
            onClick: handleSaveRow
          });
        }

        return /*#__PURE__*/jsxRuntime.jsx(IndeterminateCheckbox, _objectSpread2({
          className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        }, row.getToggleRowSelectedProps()));
      }
    }].concat(_toConsumableArray(columns));
  });
};
function usePrevious(value) {
  var ref = React.useRef(value);
  React.useEffect(function () {
    ref.current = value;
  });
  return ref.current;
}

var DataTable = function DataTable(props) {
  // Set up internal react-table hooks to be used by useTable
  var hooks = [reactTable.useSortBy, reactTable.usePagination, reactTable.useRowSelect]; // Only set this value if we're able to delete rows

  var handleDelete;
  var data = props.data,
      columns = props.columns,
      defaultItem = props.defaultItem,
      _props$disableToolbar = props.disableToolbar,
      disableToolbar = _props$disableToolbar === void 0 ? false : _props$disableToolbar,
      handleChange = props.handleChange,
      handleFetchData = props.handleFetchData,
      _props$paginated = props.paginated,
      paginated = _props$paginated === void 0 ? false : _props$paginated,
      _props$selectable = props.selectable,
      selectable = _props$selectable === void 0 ? false : _props$selectable,
      _props$tableRef = props.tableRef,
      tableRef = _props$tableRef === void 0 ? React.useRef(null) : _props$tableRef,
      tableRow = props.tableRow,
      tableToolbar = props.tableToolbar,
      _props$theme = props.theme,
      theme = _props$theme === void 0 ? defaultTheme : _props$theme,
      _props$stickyHeader = props.stickyHeader,
      stickyHeader = _props$stickyHeader === void 0 ? false : _props$stickyHeader,
      _props$isEditing = props.isEditing,
      isEditing = _props$isEditing === void 0 ? false : _props$isEditing;
  /** Table State */

  var _useState = React.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      editing = _useState2[0],
      setEditing = _useState2[1];

  var _useState3 = React.useState(data),
      _useState4 = _slicedToArray(_useState3, 2),
      tableData = _useState4[0],
      setData = _useState4[1];

  var resetTable = handleFetchData ? false : true;

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isNewRowAfterSave = _useState6[0],
      setIsNewRowAfterSave = _useState6[1];
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
  } // Set up the default column for useTable


  var defaultColumn = React.useMemo(function () {
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
    setIsNewRowAfterSave(true);
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
      var updatedData = filter__default['default'](tableData, function (item, index) {
        return index != lastRow;
      });
      setData(updatedData);
      setEditing(updatedData.length);
    }
  };

  var _useTable = reactTable.useTable.apply(void 0, [_objectSpread2(_objectSpread2({}, props), {}, {
    data: tableData,
    defaultColumn: defaultColumn,
    columns: columns,
    saveRow: saveRow,
    pageCount: -1,
    // manualPagination: handleFetchData ? true : false,
    autoResetPage: resetTable,
    autoResetExpanded: resetTable,
    autoResetGroupBy: resetTable,
    autoResetSelectedRows: resetTable,
    autoResetSortBy: resetTable,
    autoResetFilters: resetTable
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
  });
  React.useEffect(function () {
    if (isNewRowAfterSave) {
      handleAdd();
      setIsNewRowAfterSave(false);
    }
  }, [isNewRowAfterSave]); // If the incoming data changes, override the table data

  React.useEffect(function () {
    setData(data);

    if (isEditing) {
      if (data.length === 0) {
        handleAdd();
      } else {
        setEditing(0);
      }
    }
  }, [data, isEditing]);
  var handleFetchDataDebounced;

  if (handleFetchData) {
    handleFetchDataDebounced = reactTable.useAsyncDebounce(handleFetchData, 200); // If an handleFetchData handler is passed, use it to pull new data on page change

    React.useEffect(function () {
      if (pageSize !== (prevPageProps === null || prevPageProps === void 0 ? void 0 : prevPageProps.pageSize) && pageSize > 0 || pageIndex !== (prevPageProps === null || prevPageProps === void 0 ? void 0 : prevPageProps.pageIndex)) {
        handleFetchDataDebounced({
          pageIndex: pageIndex,
          pageSize: pageSize,
          sortBy: sortBy
        });
      }
    }, [reactTable.useAsyncDebounce, handleFetchData, pageIndex, pageSize, sortBy]);
  }

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
    reactHotkeysHook.useHotkeys('ctrl+n', function () {
      return handleAdd();
    });
    var optionsHot = {
      enableOnTags: ['INPUT']
    };
    reactHotkeysHook.useHotkeys('esc', function () {
      return handleCancel();
    }, optionsHot);

    function useOutsideTable(ref) {
      React.useEffect(function () {
        function handleClickOutside(event) {
          if (ref !== null && ref !== void 0 && ref.current && !ref.current.contains(event.target)) {
            handleCancel();
          }
        } // Bind the event listener


        document.addEventListener("mousedown", handleClickOutside);
        return function () {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [ref]);
    }

    useOutsideTable(tableRef);
    return /*#__PURE__*/jsxRuntime.jsxs("table", _objectSpread2(_objectSpread2({}, getTableProps()), {}, {
      ref: tableRef,
      children: [/*#__PURE__*/jsxRuntime.jsx("thead", {
        children: headerGroups.map(function (headerGroup) {
          return /*#__PURE__*/jsxRuntime.jsx("tr", _objectSpread2(_objectSpread2({}, headerGroup.getHeaderGroupProps()), {}, {
            children: headerGroup.headers.map(function (column) {
              return /*#__PURE__*/jsxRuntime.jsxs("th", _objectSpread2(_objectSpread2({}, column.getHeaderProps(column.getSortByToggleProps())), {}, {
                scope: "col",
                children: [column.render('Header'), /*#__PURE__*/jsxRuntime.jsx("span", {
                  children: column.isSorted ? column.isSortedDesc ? /*#__PURE__*/jsxRuntime.jsx(outline.ArrowSmDownIcon, {
                    className: "sort-indicator"
                  }) : /*#__PURE__*/jsxRuntime.jsx(outline.ArrowSmUpIcon, {
                    className: "sort-indicator"
                  }) : ''
                })]
              }));
            })
          }));
        })
      }), /*#__PURE__*/jsxRuntime.jsx("tbody", _objectSpread2(_objectSpread2({}, getTableBodyProps()), {}, {
        children: !paginated ? rows.map(function (row) {
          prepareRow(row);
          return /*#__PURE__*/jsxRuntime.jsx(TableRowRender, {
            row: row,
            editing: editing,
            saveRow: saveRow,
            selectable: selectable
          }, row.index);
        }) : page.map(function (row) {
          prepareRow(row);
          return /*#__PURE__*/jsxRuntime.jsx(TableRowRender, {
            row: row,
            editing: editing,
            saveRow: saveRow,
            selectable: selectable
          }, row.index);
        })
      }))]
    }));
  };

  var InfiniteScrollTable = function InfiniteScrollTable() {
    return /*#__PURE__*/jsxRuntime.jsx(InfiniteScroll__default['default'], {
      dataLength: rows.length,
      next: function next() {
        return handleFetchDataDebounced({
          pageSize: pageSize,
          pageCount: pageCount,
          sortBy: sortBy
        });
      },
      hasMore: true,
      loader: /*#__PURE__*/jsxRuntime.jsx("p", {
        children: "Loading more items..."
      }),
      children: /*#__PURE__*/jsxRuntime.jsx(Table, {})
    });
  };

  var PaginatedTable = function PaginatedTable() {
    return /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [/*#__PURE__*/jsxRuntime.jsx(Table, {}), /*#__PURE__*/jsxRuntime.jsx(Pagination, _objectSpread2({}, paginationProps))]
    });
  };

  return /*#__PURE__*/jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: /*#__PURE__*/jsxRuntime.jsxs(TableThemeProvider, {
      theme: theme,
      children: [!disableToolbar || tableToolbar ? /*#__PURE__*/jsxRuntime.jsx(ToolbarRender, {
        canAdd: editing === null,
        canDelete: selectedFlatRows.length > 0,
        canEdit: selectedFlatRows.length === 1,
        canReset: tableData.length !== data.length,
        handleAdd: handleAdd,
        handleDelete: handleDelete,
        handleEdit: handleEdit,
        handleReset: handleReset
      }) : null, /*#__PURE__*/jsxRuntime.jsx(StyledDataTable, {
        className: stickyHeader ? 'sticky' : '',
        children: paginated ? paginated === 'scroll' ? /*#__PURE__*/jsxRuntime.jsx(InfiniteScrollTable, {}) : /*#__PURE__*/jsxRuntime.jsx(PaginatedTable, {}) : /*#__PURE__*/jsxRuntime.jsx(Table, {})
      })]
    })
  });
};

exports.DataTable = DataTable;
exports.EditableCell = EditableCell;
exports.TableRow = TableRow;
exports.TableToolbar = TableToolbar;
exports.defaultTheme = defaultTheme;
