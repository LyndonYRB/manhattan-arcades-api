require("dotenv").config();
const express = require("express");
const db = require("./db");
const morgan = require("morgan")

const app = express();

//GET ALL ARCADES
app.get("/api/v1/arcades", async (request, response) => {

  const results = await db.query("select * from arcades")
  console.log(results)
  response.status(200).json({
    status: "success",
    data: {
      arcade: "ctf",
    }
    
  })
});
//GET ONE ARCADE
app.get("/api/v1/arcades/:id", (request, response) => {
  console.log(request.params);

  response.status(200).json({
    status: "success",
    data: {
      arcade: "ctf",
    }
    
  })
});
//CREATE ARCADE
app.post("/api/v1/arcades/:", (request, response) => {
  console.log(request.body);

  response.status(201).json({
    status: "success",
    data: {
      arcade: "ctf",
    }
    
  })
});
//UPDATE ARCADE
app.put("/api/v1/arcades/:id", (request, response) => {
  console.log(request.params.id);
  console.log(request.body);

  response.status(200).json({
    status: "success",
    data: {
      arcade: "ctf",
    }
    
  })
});
//DELETE ARCADE
app.delete("/api/v1/arcades/:id", (request, response) => {
  response.status(204).json({
    status: "success",
    
    
  })
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`the server is up and running on port ${port}.`);
});