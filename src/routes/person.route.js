const express = require("express");
const router = express.Router();
const personController = require("../controllers/person.controller");

router.get("/", (req, res) => {
  res.send("IT WORKS!!!!!");
});

router.post("/", personController.createPersonController);
router.get("/:user_id", personController.readUserController);
router.put("/:user_id", personController.updateUserController);
router.delete("/:user_id", personController.deleteUserController);

module.exports = router;
