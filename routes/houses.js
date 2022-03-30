import { Router } from "express";
import * as controllers from "../controllers/houses.js";

const router = Router();

router.get("/houses", controllers.getHouses);
router.get("/houses/:id", controllers.getHouse);
router.post("/houses", controllers.createHouse);
router.put("/houses/:id", controllers.updateHouse);
router.delete("/houses/:id", controllers.deleteHouse);

export default router;