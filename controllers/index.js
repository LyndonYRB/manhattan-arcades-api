import { Router } from "express";

import arcades from "../Model/arcades.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/", arcadesRoutes);


export default router;
