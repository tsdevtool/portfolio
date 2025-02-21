import { getInformationRepo } from "../controller/repositories.controller.js";

const router = express.Router();

router.get("/:id/repositories/", getInformationRepo);

export default router;
