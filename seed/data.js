import db from "../db/connection.js";
import Arcade from "../Model/arcades"

import arcades from "./arcades.json" assert { type: "json" };


const insertData = async () => {
  // reset database
  db.dropDatabase();


  // insert arcades into database
  await Arcade.insertMany(arcades);

  // close db connection (done)
  db.close();
};

insertData();
