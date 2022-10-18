require("dotenv").config();
const express = require("express");
const db = require("./db");
const morgan = require("morgan")

const app = express();

//GET ALL ARCADES
app.get("/api/v1/arcades", async (request, response) => {
try {
   const results = await db.query("select * from arcades")
  console.log(results)
  response.status(200).json({
    status: "success",
    results: results.rows.length,
    data: {
      arcades: results.rows
    }
  });
} catch (error) {
  console.log(error)
}
});
//GET ONE ARCADE
app.get("/api/v1/arcades/:id", async (request, response) => {
  try {
    const results = await db.query("select * from arcades where id = $1", [request.params.id]); 
    response.status(200).json({
      status: "success",
      data: {
      arcade: results.rows[0],
    }
  })
} catch (error) {
  console.log(error)
}
});
//CREATE ARCADE
app.post("/api/v1/arcades/:", async (request, response) => {
try {
  const results = await db.query(
    "insert into arcades (name, location, price_range) values ($1, $2 ,$3) returing *",
    [request.body.name, request.body.location, request.body.price_range]);
   response.status(201).json({
    status: "success",
    data: {
      arcade: results.rows[0],
    }  
  })
} catch (error) {
  console.log(error)
} 
});
//UPDATE ARCADE
app.put("/api/v1/arcades/:id", async (request, response) => {
  try {
    const results = await db.query(
      "update arcades set name = $1, location = #2, price_range = $3 where id = $4 returning ",
      [request.body.name, request.body.location, request.body.price_range, request.params.id]);
    response.status(200).json({
    status: "success",
    data: {
      arcade: results.rows[0],
    }  
  })
} catch (error) {
  console.log(error)
}
});
//DELETE ARCADE
app.delete("/api/v1/arcades/:id", async( request, response) => {

  try {
    const results = await db.query("delete from arcades where id = $1", [request.params.id]);
response.status(204).json({
    status: "success",
    data: {
      arcade: results
    }   
  })
  } catch (error) {
    console.log(error)
  }
  
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`the server is up and running on port ${port}.`);
});