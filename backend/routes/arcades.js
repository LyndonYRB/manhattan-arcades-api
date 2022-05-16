import { Router } from "express";
import * as controllers from "../controllers/arcades.js";

const router = Router();

router.get("/arcades", controllers.getArcades);
router.get("/arcades/:id", controllers.getArcade);
router.post("/arcades", controllers.createArcade);
router.put("/arcades/:id", controllers.updateArcade);
router.delete("/arcades/:id", controllers.deleteArcade);

export default router;
