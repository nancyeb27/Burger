// Dependencies
var orm = require("../config/orm.js");

// We pass in query parameters as required by our ORM and also a callback to receive data

var burger = {
	all: function (cb) {
		orm.all("burgers", function (res) {
			cb(res);
		});
	},
	insertOne: function (cols, vals, cb) {
		orm.insertOne("burgers", cols, vals, function (res) {
			cb(res);
		});
	},
	updateOne: function (objColVals, condition, cb) {
		orm.updateOne("burgers", objColVals, condition, function (res) {
			cb(res);
		});
	}
};
// Export
module.exports = burger;