const router = require("express").Router();
const controller = require("../controllers/profileController.js");
const asyncHandler = require("../utils/asyncHandler.js");

router.post("/analyze/:username", asyncHandler(controller.analyze));
router.get("/profiles", asyncHandler(controller.getProfiles));
router.get("/profile/:username", asyncHandler(controller.getProfile));

module.exports = router;
