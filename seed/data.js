import db from "../db/connection.js";
import Arcade from "../model/arcades.js"

import arcades from "./arcades" assert { type: "json" };


const insertData = async () => {
  // reset database
  db.dropDatabase();

  let myArcade = [];
  for (let i = 0; i < arcades.length; i++) {
    myArcade.push({

      name: arcades[i].name,
      address: arcades[i].address,
      hours: arcades[i].hours,
      coverCharge: arcades[i].coverCharge,
      servesAlcohol: arcades[i].servesAlcohol,

    })
  }

  // insert arcades into database
  await Arcade.insertMany(arcades);

  // close db connection (done)
  db.close();
};

insertData();
