import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Arcade = new Schema({
  name: { type: String },
  address: { type: String },
  hours: { type: String, required: true },
  coverCharge: { type: Boolean },
  servesAlcohol: { type: Boolean },

});

export default mongoose.model("arcades", Arcade);
