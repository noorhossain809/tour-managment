const express = require('express')
const router = express.Router()
const tourRouter = require('../../controllers/tour.controller')

// Query
router.route('/')
.get(tourRouter.getAllTours)
.post(tourRouter.saveATour)

router.route('/:id')
.get(tourRouter.getTourById)
.patch(tourRouter.updateATour)

module.exports = router