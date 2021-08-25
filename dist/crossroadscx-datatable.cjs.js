'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./crossroadscx-datatable.cjs.prod.js");
} else {
  module.exports = require("./crossroadscx-datatable.cjs.dev.js");
}
