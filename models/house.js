import mongoose from "mongoose";
const Schema = mongoose.Schema;

let House = new Schema({
  id: { type: String },
  name: { type: String },
  mascot: { type: String },
  headOfHouse: { type: String },
  houseGhost: { type: String },
  founder: { type: String },
  __v: { type: Number },
  school: { type: String },
  members: [{ type: Schema.Types.ObjectId, ref: "characters" }],
  values: [{ type: String }],
  colors: [{ type: String }],
});

export default mongoose.model("houses", House);
