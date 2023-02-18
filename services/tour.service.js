const Tour = require('../models/tour-models')

exports.getAllToursService = async() => {
    const tours = await Tour.find({});
    return tours
}

exports.getTourByIdService = async(id) => {
    const tour = await Tour.findById(id);
    return tour
}

exports.updateATourService = async(id, data) => {
    const tour = await Tour.updateOne({_id: id}, {$set: data}, {runValidators: true})
    return tour;
}

exports.createATourService = async(data) => {
    const tour = await Tour.create(data)
    return tour
}
