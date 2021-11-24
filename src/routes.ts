import { Router } from "express";
import { CreateRegionController } from "./controllers/CreateRegionController";
import { DeleteRegionController } from "./controllers/DeleteRegionController";
import { ListRegionController } from "./controllers/ListRegionController";
import { ListRegionsSituationController } from "./controllers/ListRegionsSituationController";
import { UpdateRegionController } from "./controllers/UpdateRegionController";

const router = Router()
const createRegionController = new CreateRegionController()
const listRegionController = new ListRegionController()
const listRegionsSituationController = new ListRegionsSituationController()
const updateRegionController = new UpdateRegionController()
const deleteRegionController = new DeleteRegionController()

router.post('/regions',createRegionController.handle)
router.get('/regions',listRegionController.handle)
router.put('/regions',updateRegionController.handle)
router.delete('/regions',deleteRegionController.handle)
router.get('/regions/situation',listRegionsSituationController.handle)

export {router}