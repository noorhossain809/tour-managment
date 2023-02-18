const { createATourService, getAllToursService, getTourByIdService, updateATourService } = require("../services/tour.service")
const { ObjectId } = require("mongodb");

module.exports.getAllTours = async(req, res) => {
    try {
        const result = await getAllToursService()
        res.status(200).json({
            status: 'success',
            message: 'Data get successfully',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "can't get the data",
            error: error.message
        })
    }
}

module.exports.getTourById = async(req, res) => {
    try {
        const {id} = req.params
        const result = await getTourByIdService({_id: ObjectId(id)})

        res.status(200).json({
            status: 'success',
            message: 'Data get successfully',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "can't get the data",
            error: error.message
        })
    }
}

module.exports.updateATour = async(req, res) => {
    try {
        const {id} = req.params;
        const result = await updateATourService(id, req.body)
        res.status(200).json({
            status: 'success',
            message: 'Data update successfully',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Data update unsuccessfully!!!',
            error: error.message
        })
    }
}

module.exports.saveATour = async(req, res) => {
    try {
        const result = await createATourService(req.body)

        result.logger()

        res.status(200).json({
            status: 'success',
            message: 'Data inserted successfully',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Data is not inserted',
            error: error.message
        })
    }
}