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
exports.NonSelectable = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var date_fns_1 = require("date-fns");
var _1 = require(".");
var defaultSale = {
    date: null,
    seller: null,
    product: null,
    quantity: null,
    createdAt: null,
    client: null,
};
var originalData = [
    {
        date: date_fns_1.format(new Date(), 'MM-DD-YYYY'),
        seller: 'Holland Oats',
        product: 'Tulips',
        quantity: 100,
        createdAt: new Date().toISOString(),
        client: 'Colorful Clogs',
    },
    {
        date: date_fns_1.format(new Date(), 'MM-DD-YYYY'),
        seller: 'Seller Name',
        product: 'Dandelions',
        quantity: 20,
        createdAt: new Date().toISOString(),
        client: 'Client Name',
    },
];
var columns = [
    {
        Header: 'Seller / Sale Info',
        columns: [
            {
                Header: 'Sale Date',
                accessor: 'date',
            },
            {
                Header: 'Seller Name',
                accessor: 'seller',
            },
        ],
    },
    {
        Header: 'Product Info',
        columns: [
            {
                Header: 'Product Name',
                accessor: 'product',
                options: [
                    'Roses ( Red )',
                    'Roses ( White )',
                ],
            },
            {
                Header: 'Quantity',
                accessor: 'quantity',
            },
        ],
    },
    {
        Header: 'Client Info',
        columns: [
            {
                Header: 'Client Name',
                accessor: 'client',
            },
        ],
    },
];
var handleChange = function (data) {
    console.log('Table onChange');
    console.log(data);
};
exports.default = {
    title: 'components/DataTable',
    component: _1.DataTable,
};
var Template = function (args) { return jsx_runtime_1.jsx(_1.DataTable, __assign({}, args), void 0); };
exports.Basic = Template.bind({});
exports.Basic.args = {
    data: originalData,
    columns: columns,
    defaultItem: defaultSale,
    handleChange: handleChange,
};
exports.NonSelectable = Template.bind({});
exports.NonSelectable.args = {
    selectable: false,
    columns: columns,
    data: originalData,
    defaultItem: defaultSale,
};
//# sourceMappingURL=DataTable.stories.js.map