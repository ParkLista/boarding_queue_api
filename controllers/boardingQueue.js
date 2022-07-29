const Taxi = require('../models/BoardingQueue');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');


/**
 * @Desc Add a new taxi to the database
 */
exports.addBoardingQueue = asyncHandler(async(req, res, next)=>{
    const taxi = await Taxi.create(req.body);
    res.status(201).json({
        success: true,
        message: 'A Boarding Queue has been added successfully',
        data: taxi
    });
});

/**
 * @Desc Get all the available taxis in the database
 */
exports.getBoardingQueue = asyncHandler(async(req, res, next)=>{
    const taxis = await Taxi.find();
    return res.status(200).json({
        success: true,
        message: 'All Boarding Queues available',
        data: taxis
    })
})