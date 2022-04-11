import { Router } from "express";

import arcadeRoutes from "./arcades.js";

let router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/", arcadeRoutes);


export default router;
