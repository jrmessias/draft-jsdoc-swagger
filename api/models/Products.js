var mongoose = require('mongoose');

let Product = new mongoose.Schema({
	name: {
		type: String,
		require: true
	}, 
	description: {
		type: String,
		require: false
	},
	quantity: {
		type: Number,
		require: true,
		default: 0
	},
	price: {
		type: Number,
		required: true,
		default: 0
	}
});

module.exports = mongoose.model('Products', Product);