import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Arcade = new Schema({
  name: { type: String },
  address: { type: String },
  hours: { type: String },
  days: { type: String },
  coverCharge: { type: Boolean },
  servesAlcohol: { type: Boolean },
});

export default mongoose.model("arcades", Arcade);
