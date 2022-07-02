const asyncHandler = require("express-async-handler");

const Prospect = require("../models/prospectModel");

// @desc Get prospects
// @route GET /api/prospects
// @access Public
const getProspects = asyncHandler(async (req, res) => {
  const prospects = await Prospect.find();

  res.status(200).json(prospects);
});

// @desc Create prospect
// @route POST /api/prospects
// @access Private
const createProspect = asyncHandler(async (req, res) => {
  const prospect = await Prospect.create({
    name: req.body.name,
    image: req.body.image,
    position: req.body.position,
    college: req.body.college,
    height: req.body.height,
    weight: req.body.weight,
    age: req.body.age,
    year: req.body.year,
    points: req.body.points,
    rebounds: req.body.rebounds,
    assists: req.body.assists,
    blocks: req.body.blocks,
    steals: req.body.steals,
    playerComp1: req.body.playerComp1,
    playerComp2: req.body.playerComp2,
    playerComp3: req.body.playerComp3,
    strength1: req.body.strength1,
    strength2: req.body.strength2,
    strength3: req.body.strength3,
    strength4: req.body.strength4,
    description: req.body.description,
    pluses: req.body.pluses,
    minuses: req.body.minuses,
  });

  res.status(200).json(prospect);
});

// @desc Update prospect
// @route PUT /api/prospects/:id
// @access Private
const updateProspect = asyncHandler(async (req, res) => {
  const prospect = await Prospect.findById(req.params.id);

  if (!prospect) {
    res.status(400);
    throw new Erorr("Goal not found");
  }

  const updateProspect = await Prospect.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updateProspect);
});

// @desc Delete prospect
// @route DELETE /api/prospects/:id
// @access Private
const deleteProspect = asyncHandler(async (req, res) => {
  const prospect = await Prospect.findById(req.params.id);

  if (!prospect) {
    res.status(400);
    throw new Erorr("Goal not found");
  }

  await prospect.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getProspects,
  createProspect,
  updateProspect,
  deleteProspect,
};
