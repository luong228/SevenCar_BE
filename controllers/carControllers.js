const Car = require('../models/carModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllCars = catchAsync(async (req, res, next) => {
    const car = await Car.find({}) //.populate('author','name').select('content createdAt');
    res.status(200).json({
        status: 'success',
        results: car.length,
        data: { car }
    })
});

exports.createOneCar = catchAsync(async (req, res, next) => {
    //const { userId } = req.user;
    const car = await Car.create({ ...req.body });
    res.status(200).json({
        status: 'success',
        data: car
    });
});

exports.updateOneCar = catchAsync(async (req, res, next) => {
    const { carId } = req.params;
    //const {userId} = req.user; nhận userID nếu cần
    const car = await Car.findByIdAndUpdate(carId, { ...req.body }, { new: true, runValidator: true });
    res.status(200).json({
        status: 'success',
        data: car
    });
});

exports.deleteOneCar = catchAsync(async (req, res, next) => {
    const { carId } = req.params;
    //const {userId} = req.user; nhận userID nếu cần
    const car = await Car.findByIdAndDelete(carId);
    res.status(200).json({
        status: 'success',
        massage: 'car has been delete'
    });
});