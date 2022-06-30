const asyncHandler = require("express-async-handler");

// @desc Get prospects
// @route GET /api/prospects
// @access Public
const getProspects = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Prospects" });
});

// @desc Create prospect
// @route POST /api/prospects
// @access Private
const createProspect = asyncHandler((req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add valid input");
  }

  res.status(200).json({ message: "Create Prospect" });
});

// @desc Update prospect
// @route PUT /api/prospects/:id
// @access Private
const updateProspect = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Prospect ${req.params.id}` });
});

// @desc Delete prospect
// @route DELETE /api/prospects/:id
// @access Private
const deleteProspect = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Prospect ${req.params.id}` });
});

module.exports = {
  getProspects,
  createProspect,
  updateProspect,
  deleteProspect,
};
