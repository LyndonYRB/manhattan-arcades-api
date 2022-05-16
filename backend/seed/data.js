import db from "../db/connection.js";
import Arcade from "../model/arcades.js"
import arcades from "./arcades.json" assert { type: "json" };


const insertData = async () => {
  db.dropDatabase();

  let myArcade = [];
  for (let i = 0; i < arcades.length; i++) {
    myArcade.push({

      name: arcades[i].name,
      address: arcades[i].address,
      hours: arcades[i].hours,
      days: arcades[i].days,
      coverCharge: arcades[i].coverCharge,
      servesAlcohol: arcades[i].servesAlcohol,
      frontImage: arcades[i].frontImage,
      backgroundImage: arcades[i].backgroundImage,

    })
  }

 
  await Arcade.insertMany(arcades);


  db.close();
};

insertData();
