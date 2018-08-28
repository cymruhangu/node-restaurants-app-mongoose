"use strict";
exports.DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://admin2:D0nt4g3t!@ds127342.mlab.com:27342/restaurant-app";
exports.TEST_DATABASE_URL =
  process.env.TEST_DATABASE_URL || "mongodb://admin2:D0nt4g3t!@ds127342.mlab.com:27342/test-estaurant-app";
exports.PORT = process.env.PORT || 8080;
