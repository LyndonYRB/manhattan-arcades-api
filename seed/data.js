import db from "../db/connection.js";
import House from "../models/house.js";
import Character from "../models/character.js";
import houses from "./houses.json" assert { type: "json" };
import characters from "./characters.json" assert { type: "json" };

const insertData = async () => {
  // reset database
  db.dropDatabase();

  // insert characters into database
  await Character.insertMany(characters);

  // insert houses into database
  await House.insertMany(houses);

  // close db connection (done)
  db.close();
};

insertData();
