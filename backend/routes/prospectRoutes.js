const express = require("express");
const {
  getProspects,
  createProspect,
  updateProspect,
  deleteProspect,
} = require("../controllers/prospectController");
const router = express.Router();

router.route("/").get(getProspects).post(createProspect);
router.route("/:id").put(updateProspect).delete(deleteProspect);

module.exports = router;
