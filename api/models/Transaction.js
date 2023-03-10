const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  previousBalance: { type: Number },
  moneyToOwner: { type: Number },
  moneyFromOwner: { type: Number },
  presentBalance: { type: Number },
  remarks: { type: String },
  date: { type: Date },
  room: { type: Schema.Types.ObjectId, ref: "Room" },
});

const Transaction = mongoose.model("Transaction", transactionSchema);
module.exports = Transaction;
