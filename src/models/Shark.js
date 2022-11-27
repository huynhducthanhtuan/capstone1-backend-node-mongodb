const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const SharkSchema = new mongoose.Schema(
	{
		id: {
			type: Number,
			unique: true
		},
		sharkId: {
			type: Number,
			unique: true
		},
		coins: {
			type: Object,
			default: {}
		},
		totalAssets: {
			type: Number,
			required: true
		},
		percent24h: {
			type: Number,
			required: true
		},
		transactionsHistory: {
			type: Array,
			default: []
		},
		walletAddress: {
			type: String,
			trim: true,
			required: true,
			unique: true
		},
		cryptos: {
			type: Array,
			default: []
		},
		historyDatas: {
			type: Array,
			default: []
		},
		followers: {
			type: Array,
			default: []
		}
	},
	{ versionKey: false }
);

SharkSchema.plugin(AutoIncrement, { inc_field: "sharkId" });

module.exports = mongoose.model("Shark", SharkSchema);
